javascript
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const ip = event.headers['x-nf-ipcountry'];
    if (ip === 'US') {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Welcome to Opti Pharmacy!" })
        };
    }
    
    return {
        statusCode: 403,
        body: JSON.stringify({ message: "Access denied. This site is only accessible in the United States." })
    };
};