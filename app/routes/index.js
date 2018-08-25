/**
 * Lets auto-magically register all the routes
 */
const fs = require('fs');

module.exports = function (server) {
	fs.readdirSync('./app/routes').forEach((file) => {
		if (file.substr(-3, 3) === '.js' && file !== 'index.js') {
			require(`./${ file.replace('.js', '') }`)(server);
		}
	});
};

/**
 * Public API
 */
// module.exports = {
	// some clever pattern here
// }