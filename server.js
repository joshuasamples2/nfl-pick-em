// const express = require('express');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const routes = require('./controllers');


// const PORT = process.env.PORT || 3001;
// const app = express();
// app.use(express.json());
// app.get('/api', (req, res) => {

// });
// app.engine('handlebars' , hbs.engine);
// app.set('view engine', 'handlebars');
// app.engine('handlebars', exphbs({defaultLayout:"main"}));
// app.set('view engine', 'handlebars')
// app.listen(PORT, () => 
//     console.log(`App listening at http://localhost:${PORT}`)
// );

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));

// app.listen(PORT, () => 
//     console.log('App listening at http://localhost:${PORT}')
// );