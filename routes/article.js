module.exports = function generateArticle(article) {
  return ({ content: `
  <div class="window article-window">
      <div class="article-header">
          <h1 class="headline">${article.headline}</h1>
          <div class="meta-info">
              <span class="source">Source: ${article.source}</span> | 
              <span class="pub-date">Published: ${new Date(article.pub_date).toLocaleDateString()}</span>
          </div>
      </div>
      <div class="window-body">
          <div class="article-body">
              <div class="article-image-container">
                  <img class="article-image" src="${article.img_url || 'https://via.placeholder.com/300'}" alt="Article Image">
              </div>
              <div class="article-content">
                  <div class="snippet">${article.snippet}</div>
                  <a href="${article.url}" target="_blank" class="read-more">Read More</a>
              </div>
          </div>
      </div>
  </div>
  `})
}
