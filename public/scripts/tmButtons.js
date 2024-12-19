const blackSquare = document.querySelector(".black-square")
const buttons = document.querySelectorAll(".button")

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let currentInput = blackSquare.textContent
        if (currentInput.length >= 5)
            return
        else if (currentInput.length < 2){ 
            currentInput += button.textContent.trim()
            if (currentInput.length === 2)
                currentInput += '/' 
        }
        else if (currentInput.length > 2 && currentInput.length < 5)
            currentInput += button.textContent.trim()
        blackSquare.textContent = currentInput
    })
})

window.clearDisplay = function() {
    blackSquare.textContent = ''
}
