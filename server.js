const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()
const PORT = 3000

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// API endpoints to serve different content
app.get('/home', (message, response) => {
    response.json(routes.home)
})

app.get('/gallery', (message, response) => {
    response.json(routes.gallery)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
