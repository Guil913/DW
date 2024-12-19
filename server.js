const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()
const PORT = 3000

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// API endpoints to serve different content
app.get('/api/home', (message, response) => {
    response.json(routes.home)
})

app.get('/api/gallery', (message, response) => {
    response.json(routes.gallery)
})

app.get('/api/profile', (message, response) => {
    response.json(routes.profile)
})

app.get('/api/login', (message, response) => {
    response.json(routes.login)
})

app.get('/api/register', (message, response) => {
    response.json(routes.register)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
