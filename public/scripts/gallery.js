async function fetchAvailableYears() {
    try {
        const response = await fetch('/api/years')
        const years = await response.json()
        const yearSelector = document.getElementById('year-selector')
        yearSelector.innerHTML += years.map(year =>
            `<option value="${year}">${year}</option>`
        ).join('');
    } catch (error) {
        console.error('Error fetching years:', error)
    }
}

async function fetchArticlesByYear() {
    const year = document.getElementById('year-selector').value;
    if (!year) return

    try {
        const response = await fetch(`/api/articles?year=${year}`)
        const articles = await response.json()
        renderGallery(articles)
    } catch (error) {
        console.error('Error fetching articles:', error)
    }
}

function renderGallery(articles) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = articles.map(article => `
        <div class="gallery-item" onclick="viewArticle('${article._id}')">
            <img src="${article.img_url || 'https://via.placeholder.com/120'}" alt="${article.headline}">
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

fetchAvailableYears()