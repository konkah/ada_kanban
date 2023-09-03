const { Card } = require('./models');

exports.getCards = async (request, response) => {
    const dbCards = await Card.findAll()
        .catch(
            (error) => {
                console.error('Failed to retrieve data: ', error);
                response.sendStatus(500);
            }
        );

    if (dbCards)
        return response.json(dbCards);
}

exports.postCards = async (request, response) => {
    const { title, content } = request.body;

    const card = { title, content, column: 'TODO' };

    const dbCard = await Card.create(card)
        .catch(
            (error) => {
                console.error('Failed to create card: ', error);
                response.sendStatus(500);
            }
        );
    
    return response.json(dbCard);
}

