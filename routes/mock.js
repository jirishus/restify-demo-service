module.exports = function (app) {
	app.get('/mock', function(req, res, next) {
		res.send('all good');
		next();
	});
};