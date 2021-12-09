const router = require('express').Router();
const { User } = require('../models/users');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
router.use ('/', homeRoutes)
router.use('/api', apiRoutes);

module.exports = router;
