/**
 * Load Config
 */
const PORT = 5000;

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
  console.log(server.name);
  console.log(`server listening on port ${ PORT }`)
});