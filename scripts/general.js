document.addEventListener("DOMContentLoaded", function () {
    const sidenavToggle = document.querySelector(".sidenav-toggle");
    const sidenav = document.querySelector(".sidenav");
    const blackSquare = document.getElementById("black-square");
    const buttons = document.querySelectorAll(".button");

    let currentInput = "";
    let isDatePart1Complete = false;

    // Toggle Sidebar
    sidenavToggle.addEventListener("click", function () {
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

    // Input Handling for Black Square
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (currentInput.length >= 5) return;

            currentInput += button.textContent.trim();
            blackSquare.textContent = currentInput;

            if (currentInput.length === 4) {
                document.getElementById("year-input").value = currentInput;
                currentInput = ""; // Reset for month
            } else if (currentInput.length === 2) {
                document.getElementById("month-input").value = currentInput;
            }
        });
    });

    // Clear Display Function
    window.clearDisplay = function () {
        currentInput = "";
        blackSquare.textContent = "";
        document.getElementById("year-input").value = "";
        document.getElementById("month-input").value = "";
    };
});
