document.querySelector('#login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Login successful!')
            localStorage.setItem('username', username)
            window.location = '/home'
        } else {
            const result = await response.json()
            alert(result.error || 'Invalid username or password.')
        }
    } catch (error) {
        console.error('Error:', error)
        alert('An error occurred while trying to log in.')
    }
})