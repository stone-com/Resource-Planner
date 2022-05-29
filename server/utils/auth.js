//file where the auth utility functions will be created and called from on the server side.
const jwt = require('jsonwebtoken');

const secret = 'mysecretshhhh';
const expiration = '2h'

module.exports = {
    authMiddleware: function ({req}){
        //set the token from the body/query/headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        //if the auth is coming from the header (split the string in to an array, pop the last element which is the toke and trim any whitespace )
        if(req.headers.authorization){
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },

    signToken: function ({ email, userName, _id }) {
    const payload = { email, userName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
