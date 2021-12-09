const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    res.render('home');
});

module.exports = router;