const express = require('express')
const path = require('path')
const routes = require('./routes')

const dotenv = require('dotenv')
dotenv.config()

const mongodb = require('mongodb')
const client = new mongodb.MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017', { useUnifiedTopology: true })
const db = client.db('theVault')

const app = express()
const PORT = process.env.PORT || 3000

// Connect to the database
async function main() {
    process.on('SIGINT', async () => {
		await client.close()
		process.exit()
	})

	await client.connect()

    const users = db.collection('users')
    // const articles = db.collection('articles')

    app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.urlencoded({ extended: true }))

    app.get('/page/:page', (message, response) => {
        // console.log(message.params.page)
        response.json(routes[message.params.page])
    })

    app.post('/api/register', express.json(), async (message, response) => {
        const { username, email, password, phone, country, newsletter, updates } = message.body

        const user = await users.findOne({ username })
        if (user) {
            response.json({ error: 'User already exists' })
            return
        } else {
            try {
                await users.insertOne({ username, email, password, phone, country, newsletter, updates })
                response.redirect('/login')
            } catch (error) {
                response.json({ error: 'An error occurred' })
                console.error('Error registering user:', error)
            }
        }
    })

    app.post('/api/login', express.json(), async (message, response) => {
        const { username, password } = message.body
        
        try {
            const user = await users.findOne({ username, password })
            if (user){
                response.status(200).json({ message: 'Login successful' })
            }
            else 
                response.status(401).json({ error: 'Invalid username or password' })
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
            console.error('Error logging in:', error)
        }
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    })

    app.listen(PORT)
}

main()