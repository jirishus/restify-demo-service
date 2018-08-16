/**
 * Load Config
 */
let config = require('./conf/config');

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

/**
 * Start Server
 */
server.listen(PORT, function() {
  console.log(`${ server.name } listening on ${ HOST }:${ PORT }`)
});