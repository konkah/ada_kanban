const express = require('express')
const { auth, login } = require('./authentication')


const app = express()
app.use(express.json())

app.get('/', (request, response) => response.json({status: 'online'}))

app.use(auth)

app.post('/login', login)

app.listen(5000, () => console.log('Access http://localhost:5000'));
