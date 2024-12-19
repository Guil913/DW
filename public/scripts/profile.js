document.querySelector('#logout').addEventListener('click', () => {
    // Remove the username from localStorage
    localStorage.removeItem('username');

    alert('Logged out');
    window.location.href = '/login';  // Redirect to login page
})