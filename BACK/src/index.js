const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (request, response) => response.json({status: 'online'}))

app.listen(5000, () => console.log('Access http://localhost:5000'));
