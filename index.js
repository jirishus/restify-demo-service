/**
 * Load Config
 */
const config = require('./app/conf/config');
const routes = require('./app/routes'); 

const PORT = config.port;
const HOST = config.host;

/**
 * Module Dependencies
 */
let restify = require('restify');

/**
 * Initialize Server
 */
var server = restify.createServer({
 name: 'demo-service',
 url: `${ PORT }`
});

/**
 * Register Routes
 */
server.get('/', function (req, res, next) {
 res.send('ok');
 next();
});

routes(server);

/**
 * Start Server
 */
server.listen(PORT, function() {
  console.log(`${ server.name } listening on ${ HOST }:${ PORT }`)
});
