const express = require('express');
const router = express.Router()
const path = require('path');
const exhbs = require('express-handlebars');
const helpers = require('../utils/helpers');
const hbs = exhbs.create({helpers})
const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

router.get('/betting', (req, res) => {
    res.render('partials/betting');
});

router.get('/teams', (req, res) =>{
    res.render('partials/teams')
})

router.get('/login', (req, res) => {
    res.render('partials/login')
})

module.exports = router;