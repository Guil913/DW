document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function() {
        let currentInput = document.querySelector(".black-square").textContent
        if (currentInput === 'YYYY/MM')
            currentInput = ''
        if (currentInput.length >= 7)
            return
        else if (currentInput.length < 4){ 
            currentInput += button.textContent.trim()
            if (currentInput.length === 4)
                currentInput += '/' 
        }
        else if (currentInput.length > 4 && currentInput.length < 7)
            currentInput += button.textContent.trim()
        document.querySelector(".black-square").textContent = currentInput
    })
})

window.clearDisplay = function() {
    document.querySelector(".black-square").textContent = 'YYYY/MM'
}

window.fetchArticles = async function() {
    const display = document.querySelector(".black-square").textContent;
    if (display.length === 7) {
        const year = display.slice(0, 4);
        const month = display.slice(5);
        try {
            const response = await fetch(`/api/articles/${year}/${month}`);
            const articles = await response.json();
            renderArticles(articles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    } else 
        alert('Please enter a valid date (YYYY/MM).');
}

function renderArticles(articles) {
    const container = document.querySelector('.articles-container')
    container.innerHTML = `
        <div class="title-bar time-machine-title-bar">
            <div class="title-bar-text">
                ${articles.length > 0 ? `${articles[0].year}/${articles[0].month}` : "No Articles Found"}
            </div>  
        </div>
    `
    container.innerHTML += articles.map(article => `
        <div class="window article-tm" onclick="viewArticle('${article._id}')">
            <div class="article-tm-header">
                <h4>${article.headline}</h4>
                <p><strong>${article.author}</strong></p>
            </div>
            <p>${article.snippet}</p>
            <p><strong>Published:</strong> ${new Date(article.pub_date).toLocaleDateString()}</p>
        </div>
    `).join('')
}


async function viewArticle(articleId) {
    try {
        const contentDiv = document.getElementById('main-content')
        const response = await fetch(`/page/article/${articleId}`)
        const data = await response.json()
        contentDiv.innerHTML = data.content
    } catch (error) {
        console.error('Error fetching article details:', error);
    }
}
