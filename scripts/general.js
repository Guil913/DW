document.addEventListener("DOMContentLoaded", function() {
    const blackSquare = document.querySelector(".black-square");
    const buttons = document.querySelectorAll(".button");

    let currentInput = "";
    let isDatePart1Complete = false;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (currentInput.length >= 5) return;

            if (currentInput.length < 2) {
                currentInput += button.textContent.trim();
                blackSquare.textContent = currentInput;

            } else if (currentInput.length === 2 && !isDatePart1Complete) {
                currentInput += '/';
                isDatePart1Complete = true;
                blackSquare.textContent = currentInput;

            } else if (currentInput.length > 2 && currentInput.length < 5) {
                currentInput += button.textContent.trim();
                blackSquare.textContent = currentInput;
            }
        });
    });

    window.clearDisplay = function() {
        currentInput = "";
        isDatePart1Complete = false;
        blackSquare.textContent = '';
    };
});
