function toggleSidenav() {
    const sidenav = document.querySelector('.sidenav');
    const toggleButton = document.getElementById('sidenav-toggle');
    const mainContent = document.querySelectorAll('.main, p');

    const isCollapsed = sidenav.classList.toggle('collapsed');

    toggleButton.innerHTML = isCollapsed ? '&#9654;' : '&#9664;';

   
    mainContent.forEach(element => {
        element.style.marginLeft = isCollapsed ? '0' : '20%';
    });
}
