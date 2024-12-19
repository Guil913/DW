document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function() {
        let currentInput = document.querySelector(".black-square").textContent
        if (currentInput.length >= 5)
            return
        else if (currentInput.length < 2){ 
            currentInput += button.textContent.trim()
            if (currentInput.length === 2)
                currentInput += '/' 
        }
        else if (currentInput.length > 2 && currentInput.length < 5)
            currentInput += button.textContent.trim()
        document.querySelector(".black-square").textContent = currentInput
    })
})

window.clearDisplay = function() {
    document.querySelector(".black-square").textContent = ''
}
