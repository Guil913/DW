const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

async function populateBD() {  
    for (let year = 2024; year >= 1950; year--) {
        for (let month = 12; month >= 1; month--) {  
            await fetchArticles(year, month)
            await new Promise(resolve => setTimeout(resolve, 10000))
        }
    }
}

const fetchArticles = async (year, month) => {
    const client = new mongodb.MongoClient(process.env.MONGO_URI || 'mongodb://localhost:6000')

    const db = client.db('theVault')
    const articles = db.collection('articles')

    const apiEndpoint = `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=G69XSQQ8IncoVzzvulfsaDC9huzYF19E`
    
    try {
        console.log("Fetching from API:", apiEndpoint)
        const response = await fetch(apiEndpoint)

        if (!response.ok) {
            const errorData = await response.text()
            throw new Error(`HTTP Error: ${response.status} - ${errorData}`)
        }

        const data = await response.json()

        const articlesArray = data.response.docs.slice(0, 100).filter(article => article.multimedia.length > 0).map(article => {
            return {
                headline: article.headline.main,
                author: article.byline.original,
                snippet: article.snippet,
                url: article.web_url,
                source: article.source,
                pub_date: article.pub_date,
                img_url: article.multimedia.length > 0 ? `https://www.nytimes.com/${article.multimedia[0].url}` : null
            }
        })

        const result = await articles.insertMany(articlesArray)
        console.log("Inserted articles:", result.insertedCount)
    } catch (error) {
        console.error("Error fetching:", error)
    } finally {
        await client.close()
    }
}

populateBD()
