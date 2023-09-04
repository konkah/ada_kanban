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
    const { title, content, column } = request.body;

    const card = { title, content, column };

    if (!cardDataIsValid(card))
        return response.sendStatus(400);

    const dbCard = await Card.create(card)
        .catch(
            (error) => {
                console.error('Failed to create data: ', error);
                response.sendStatus(500);
            }
        );
    
    return response.json(dbCard);
}

const cardDataIsValid = (card) => {
    return card.title != null
        && card.content != null
        && card.column != null
}

exports.putCards = async (request, response) => {
    const urlId = request.params.id;
    const { id, title, content, column } = request.body;

    if (urlId !== id)
        return response.sendStatus(400);

    const card = { title, content, column };

    if (!cardDataIsValid(card))
        return response.sendStatus(400);

    const dbCard = await Card.findOne(
        {
            where: { id: urlId }
        }
    ).catch(
        (error) => {
            console.error('Failed to update data: ', error);
            response.sendStatus(500);
        }
    );

    if (!dbCard) {
        console.error('Failed to update data: ', urlId);
        response.sendStatus(404);
    }

    dbCard.title = title;
    dbCard.content = content;
    dbCard.column = column;

    await dbCard.save();

    return response.json(dbCard);
}

exports.deleteCards = async (request, response) => {
    const urlId = request.params.id;

    const dbCard = await Card.findOne(
        {
            where: { id: urlId }
        }
    ).catch(
        (error) => {
            console.error('Failed to delete data: ', error);
            response.sendStatus(500);
        }
    );

    if (!dbCard) {
        console.error('Failed to delete data: ', urlId);
        response.sendStatus(404);
    }

    await Card.destroy(
        {
            where: { id: urlId }
        }
    ).catch(
        (error) => {
            console.error('Failed to delete data: ', error);
            response.sendStatus(500);
        }
    );

    const dbCards = await Card.findAll()
        .catch(
            (error) => {
                console.error('Failed to retrieve data: ', error);
                response.sendStatus(500);
            }
        );

    return response.json(dbCards);
}

exports.logUpdateOrDelete = async (request, response, next) => {
    await next();

    let logType = '';

    switch (request.method) {
        case 'PUT':
            logType = 'Updated';
            break;
        case 'DELETE':
            logType = 'Deleted';
            break;
        default:
            return;
    }

    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR');

    const urlId = request.params.id;

    const card = await Card.findOne(
        {
            where: { id: urlId }
        }
    );

    if (card) {
        console.log(
            `${date} ${time} - Card ${urlId} - ${card.title} - ${logType}`
        );
    }
}
