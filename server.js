const express = require('express');

// Initialise server variables
const init = () => {
    this.app = express()
    this.port = 3000;

    server.bind(this)()
}

// Server runtime function
const server = () => {
    // listens for actiity on root page
    // takes request, response
    this.app.get('/', (req, res) => {
        console.log(`User connected to root`);
        res.send('Hello World!')
    });

    this.app.listen(this.port, () => {
        console.log(`Server Listening on port ${this.port}`);
    });
}

init();