document.addEventListener("DOMContentLoaded", function() {
    const sidenav = document.querySelector(".sidenav");
    const sidenavToggle = document.querySelector(".sidenav-toggle");
    const blackSquare = document.querySelector(".black-square");
    const buttons = document.querySelectorAll(".button");

    let currentInput = "";
    let isDatePart1Complete = false;

    sidenavToggle.addEventListener("click", function() {
        sidenav.classList.toggle("collapsed");

        const header = document.querySelector("header");
        if (sidenav.classList.contains("collapsed")) {
            header.style.marginLeft = "0";  
            header.style.width = "100%";  
        } else {
            header.style.marginLeft = "20%";  
            header.style.width = "calc(100% - 20%)";  
        }
    });

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
});
