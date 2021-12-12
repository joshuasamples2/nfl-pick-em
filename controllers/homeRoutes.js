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


// Use withAuth middleware to prevent access to route
// router.get('/betting', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('partials/betting', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   router.get('/login', (req, res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (req.session.logged_in) {
//       res.redirect('partials/betting');
//       return;
//     }
  
//     res.render('login');
//   });
module.exports = router;