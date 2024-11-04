const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
    let response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
    };

    if (event.path === '/Styles.css') {
        response.headers['Content-Type'] = 'text/css';
        response.body = fs.readFileSync(path.join(__dirname, 'Styles.css'), 'utf8');
    } else {
        response.body = fs.readFileSync(path.join(__dirname, 'Index.html'), 'utf8');
    }

    return response;
};
