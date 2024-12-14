function toggleSidenav() {
    const sidenav = document.getElementById('sidenav');
    const toggleButton = document.getElementById('sidenav-toggle');
    const header = document.querySelector('header');
    const mainContent = document.querySelector('.main-content');


    const isCollapsed = sidenav.classList.toggle('collapsed');

  
    toggleButton.innerHTML = isCollapsed ? '&#9654;' : '&#9664;';

   
    if (isCollapsed) {
        header.style.marginLeft = '0';
        header.style.width = '100%';
    } else {
        header.style.marginLeft = '20%';
        header.style.width = 'calc(100% - 20%)';
    }

   
    mainContent.style.marginLeft = isCollapsed ? '0' : '20%';
}


document.getElementById('sidenav-toggle').addEventListener('click', toggleSidenav);
