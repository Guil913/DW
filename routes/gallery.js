module.exports = {
    content: 
        `<div class="title-bar-gallery">Gallery</div>
        <div class="gallery-controls">
            <label for="year-selector">Select Year:</label>
            <select id="year-selector" onchange="fetchArticlesByYear()">
                <option value="" disabled selected>Choose a year</option>
            </select>
        </div>
        <div id="gallery-container" class="gallery-container"></div>
    `
}
