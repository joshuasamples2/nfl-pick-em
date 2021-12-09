const router = require('express').Router();
const { User } = require('../models/users');

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
router.use ('./home-routes', homeRoutes)
router.use('/api', apiRoutes);

module.exports = router;
