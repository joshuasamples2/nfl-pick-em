const express = require('express');
const router = express.Router()
const path = require('path');
const exhbs = require('express-handlebars');
const helpers = require('../utils/helpers');
const hbs = exhbs.create({helpers})
const app = express();
const withAuth = require('../utils/auth')

router.get('/', (req, res) =>{
    res.render("home");
  })

router.get('/betting', withAuth, (req, res) => {
    res.render('partials/betting');
});

router.get('/teams', (req, res) =>{
    res.render('partials/teams')
})

router.get('/login', (req, res) => {
    res.render('partials/login')
})

module.exports = router;