const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    console.log('Hello world Docker Node');
    //res.send('Hello world Docker Node');
    res.render('FrontEnd/index.html');
});

app.listen(8080, function() {
    console.log('Server running');
}) 