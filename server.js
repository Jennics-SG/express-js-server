const express = require('express');

// Initialise server variables
const init = () => {
    this.app = express()
    this.port = 3000;

    // Tells the server what view engine to
    // use when rendering HTML
    this.app.set('view engine', 'ejs');

    server.bind(this)();
}

// Server runtime function
const server = () => {
    // listens for actiity on root page
    // takes request, response
    this.app.get('/', (req, res) => {
        console.log(`User connected to root`);

        let text = ""

        if(isMobile(req.headers['user-agent']))
            text = "Mobile";
        else
            text = "Desktop";

        // Status sends a HTML status code
        // Render renders HTML and can also
        // pass an object to access in the ejs code
        res.status(200)
            .render('home', {device: text});
    });

    this.app.listen(this.port, () => {
        console.log(`Server Listening on port ${this.port}`);
    });
}

// Function that checks user-agent HTTP header to see if the user
// Is connecting on mobile
const isMobile = (string) => {
    const deviceHeaders =  ["Android",
                            "iPhone",
                            "iPad",
                            "iPod",
                            "BlackBerry",
                            "Windows Phone"]

    for(const str of deviceHeaders){
        if(string.includes(str)){
            return true;
            break;
        }
    }
}

init();