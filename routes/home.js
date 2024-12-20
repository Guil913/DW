module.exports = {
    content: `
        <div class="title-bar" class="time-machine-title-bar">
            <div class="title-bar-text">Type a Date</div>
        </div>
        <div class="background-container">
            <div class="time-machine-wrapper">
                <div class="image-container">
                    <h1>The Time Machine</h1>
                    <div class="black-square-wrapper">
                        <div id="black-square" class="black-square">YYYY/MM</div>
                    </div>
                    <div class="grid-container">
                        <div class="button">1</div>
                        <div class="button">2</div>
                        <div class="button">3</div>
                        <div class="button">4</div>
                        <div class="button">5</div>
                        <div class="button">6</div>
                        <div class="button">7</div>
                        <div class="button">8</div>
                        <div class="button">9</div>
                        <div class="button">0</div>
                    </div>
                    <div class="windows-buttons-wrapper">
                        <button class="windows-button cross-button" onclick="clearDisplay()">X</button>
                        <button class="windows-button check-button" onclick="fetchArticles()">✔</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="articles-container">
        </div>`,
}
  