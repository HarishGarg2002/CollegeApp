const expressJwt = require('express-jwt');

function jwtmiddleware(){
    const secret = process.env.ACCESS_SECRET_KEY;
    return expressJwt({
        secret,
        algorithms:['HS256']
    }).unless({ 
        path:[
            '/',
            '/login',
            '/register'
        ]
    })
}

module.exports = jwtmiddleware;