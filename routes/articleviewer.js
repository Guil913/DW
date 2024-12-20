module.exports = {
    content: `
  <div class="window" style="width: 80%; margin: auto; margin-top: 50px;">
    <div class="article-viewer-title-bar">
      <div class="title-bar-text">Article Viewer</div>
    </div>
    <div class="window-body">
      <div class="article-viewer-container">
        <div class="article-viewer-image-container">
          <img class="article-image" src="" alt="Article Image">
        </div>
        <div class="article-viewer-content-container">
          <h1 class="article-title">Article Title</h1>
          <div class="article-viewer-caption article-abstract">Abstract: Short synopsis of the article.</div>
          <div class="article-viewer-text article-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lectus et dolor volutpat malesuada. Duis id cursus nisl.
          </div>
        </div>
      </div>
      <a class="article-link" href="/article.html" target="_blank">Read Full Article</a>
    </div>
  </div>
    `
}