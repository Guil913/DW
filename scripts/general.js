document.addEventListener("DOMContentLoaded", function() {
    const sidenav = document.querySelector(".sidenav");
    const sidenavToggle = document.querySelector(".sidenav-toggle");


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
});