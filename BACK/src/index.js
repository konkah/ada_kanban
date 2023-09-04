const express = require('express');
const { auth, login } = require('./authentication');
const { getCards, postCards, putCards, deleteCards, logUpdateOrDelete } = require('./cards');


const app = express();
app.use(express.json());

app.get('/', (request, response) => response.json({status: 'online'}));

app.use(auth);
app.use(logUpdateOrDelete);

app.post('/login', login);

app.get('/cards', getCards);
app.post('/cards', postCards);
app.put('/cards/:id', putCards);
app.delete('/cards/:id', deleteCards);

app.listen(5000, () => console.log('Access http://localhost:5000'));
