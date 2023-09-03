const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;
const apiUsername = process.env.API_USERNAME;
const apiPassword = process.env.API_PASSWORD;

exports.login = (request, response) => {
    const { username, password } = request.body;

    if (username === apiUsername && password === apiPassword) {
        var token = jwt.sign({username}, jwtSecret, {'expiresIn': '10m'});
        return response.json({'token': token});
    }

    return response.sendStatus(403);
}

exports.auth = (request, response, next) => {
    if (request.path === '/login') {
        return next(); // skip auth for login endpoint
    }

    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return response.sendStatus(401);

    return jwt.verify(
        token,
        jwtSecret,
        
        (err, _) => {
            if (err)
                return response.sendStatus(403);
            return next();
        }
    
    );
}
