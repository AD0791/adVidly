const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const logger = require("./middlewares/logger");
const config = require('config');
// routes / api
const genres = require('./routes/genres')
// home
const home = require('./routes/home');

// debug
const startupDebugger = require('debug')('app:start');
const dbDebugger = require('debug')('app:db');
const getEnv = require('debug')('app:env');
const getAppName = require('debug')('app:name');
const getAppMailServer = require('debug')('app:mailServer')
//const getAppMailPassword = require('debug')('app:mailPassword')
const getPort = require('debug')('app:port')
// get the env and use it
env = app.get('env')
getEnv(`env: ${env}`)
//console.log(`env: ${ process.env.NODE_ENV}`)
// > env: undifined b default

if (env === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('morgan is here')
}

// if db situation
dbDebugger('db start')

// environment ink to config
getAppName(`Application name: ${config.get('name')}`)
getAppMailServer(`Application mail server: ${config.get('mail.host')}`)
//getAppMailPassword(`Mail password: ${config.get('mail.password')}`)

// middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
// third party middleware
app.use(helmet());

// custom middleware
app.use(logger);


// api routes
app.use('/api/genres', genres)



// home routes

// templating engine
app.set('view engine', 'pug');
// the default values is ./views
// we can set it if we want
app.set('views', './components')


app.use('/', home)




// env variables
// terminal: $export PORT=5000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  getPort(`Port is open ${port}`);
});