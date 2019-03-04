/**
 * Load Config
 */
const config = require('./config');
const routes = require('./app/routes'); 

const PORT = config.port;
const HOST = config.host;

const newrelic = require('newrelic');
/**
 * Module Dependencies
 */
let restify = require('restify');
let dbConn = require('./app/storage/mongoose.js');

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
	console.log(`${ server.name } listening on ${ HOST }:${ PORT }`);
	
	dbConn.mongoConnect()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log('Error', err);
		});
});

module.exports = server;