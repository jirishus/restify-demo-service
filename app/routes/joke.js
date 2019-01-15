const jokeCtrl = require('../controllers/jokeCtrl');

module.exports = function (app) {
 app.get('/joke', jokeCtrl.fetchRandomJoke);
};
