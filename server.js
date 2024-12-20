const express = require('express')
const path = require('path')
const routes = require('./routes')

const dotenv = require('dotenv')
dotenv.config()

const mongodb = require('mongodb')
const client = new mongodb.MongoClient(process.env.MONGO_URI || 'mongodb://localhost:6000')
const db = client.db('theVault')
const { ObjectId } = require('mongodb')

const app = express()
const PORT = process.env.PORT || 3000

// Connect to the database
async function main() {
    process.on('SIGINT', async () => {
		await client.close()
		process.exit()
	})

	await client.connect()

    const users = db.collection('users')
    // const articles = db.collection('articles')

    app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.urlencoded({ extended: true }))

    app.get('/page/random', async (message, response) => {
        const articles = db.collection('articles')
        try {
            const count = await articles.countDocuments()
            const randomIndex = Math.floor(Math.random() * count)
            const randomArticle = await articles.find().skip(randomIndex).limit(1).toArray()
            
            if (randomArticle.length > 0) {
                const article = randomArticle[0]
                const generateRandomArticleContent = routes.article
                const articleHtml = generateRandomArticleContent(article)
                response.json(articleHtml)
            } else {
                response.status(404).send('No articles found')
            }
        } catch (error) {
            console.error('Error fetching random article:', error)
            response.status(500).send('Error fetching random article')
        }
    })

    app.get('/page/article/:id', async (message, response) => {
        const { id } = message.params;
        try {
            const article = await db.collection('articles').findOne({ _id: new ObjectId(id) });
            if (article) {
                const generateArticle = routes.article
                const articleHtml = generateArticle(article)
                response.json(articleHtml);
            } else {
                response.status(404).json({ error: 'Article not found' });
            }
        } catch (error) {
            console.error('Error fetching article:', error);
            response.status(500).json({ error: 'An error occurred while fetching the article.' });
        }
    })

    app.get('/api/articles/:year/:month', async (message, response) => {
        const { year, month } = message.params
        const articles = db.collection('articles')
        try {
            const results = await articles.find({ year: parseInt(year), month: parseInt(month) }).toArray()
            response.json(results)
        } catch (error) {
            console.error('Error fetching articles:', error)
            response.status(500).json({ error: 'An error occurred while fetching articles.' })
        }
    });
    

    app.get('/page/:page', (message, response) => {
        response.json(routes[message.params.page])
    })

    app.get('/api/years', async (message, response) => {
        try {
            const years = await db.collection('articles').distinct('year')
            response.json(years.sort((a, b) => b - a))
        } catch (error) {
            console.error('Error fetching years:', error);
            response.status(500).json({ error: 'An error occurred while fetching years.' })
        }
    })

    app.get('/api/articles', async (message, response) => {
        const { year } = message.query
        if (!year) {
            response.status(400).json({ error: 'Year is required' });
            return;
        }
    
        try {
            const articles = await db.collection('articles').find({ year: parseInt(year) }).toArray();
            response.json(articles);
        } catch (error) {
            console.error('Error fetching articles by year:', error);
            response.status(500).json({ error: 'An error occurred while fetching articles.' });
        }
    });
    

    app.post('/api/register', express.json(), async (message, response) => {
        const { username, email, password, phone, country, newsletter, updates } = message.body

        const user = await users.findOne({ username })
        if (user) {
            response.json({ error: 'User already exists' })
            return
        } else {
            try {
                await users.insertOne({ username, email, password, phone, country, newsletter, updates })
                response.redirect('/login')
            } catch (error) {
                response.json({ error: 'An error occurred' })
                console.error('Error registering user:', error)
            }
        }
    })

    app.post('/api/login', express.json(), async (message, response) => {
        const { username, password } = message.body
        
        try {
            const user = await users.findOne({ username, password })
            if (user){
                response.status(200).json({ message: 'Login successful' })
            }
            else 
                response.status(401).json({ error: 'Invalid username or password' })
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
            console.error('Error logging in:', error)
        }
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    })

    app.listen(PORT)
}

main()