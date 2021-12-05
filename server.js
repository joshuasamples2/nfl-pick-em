const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = 3001;
const app = express();

app.get('/api', (req, res) => {

});

app.listen(PORT, () => 
    console.log('App listening at http://localhost:${PORT}')
);

