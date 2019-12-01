var express = require('express');

// Create our app
var app = express();
const PORT = process.ev.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port 3000');
});
