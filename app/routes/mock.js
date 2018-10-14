const mockController = require('../controllers/mockController');

module.exports = function (app) {
 app.get('/mock', mockController.mockController);
 app.get('/mock/:mockid', mockController.mockIdController);
};