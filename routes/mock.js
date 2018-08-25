/**
 *  I am beginning to break out the prior anonymous functions
 *  for named function definitions in the form of route-handlers
 *  this will be loaded from its own file eventually
 */
function mockController(req, res, next) {
 // res.send({ info: 'Welcome to the Mock Route' });

/**
 * Example multi-step process
 * This could be a membership creation, a form submission, or some sort of validation process
 */

startMainProcess()
 .then((mainResult) => {
	return createNewUser();
 })
 .then((userResult) => {
	return registerUser();
 })
 .then((registeredUser) => {
	res.send(registeredUser);
 });


 /**
  * Proceed to next execution point
  * next needs to be explicitly called
  */
 next();
};

function startMainProcess() {
	return new Promise((resolve) => {
		resolve('main process start');
	});
}

function createNewUser() {
	return new Promise((resolve) => {
		resolve('new user object');
	});
}

function registerUser() {
	return new Promise((resolve) => {
		resolve('new user registered');
	});
}

function mockIdController(req, res, next) { 
 if (!req.params.mockid) {
  res.send(400, 'Missing Mock Id Required Parameter');
 } else {
  res.send(`searching for mock id ${ req.params.mockid }`);
 }
 /**
  * Proceed to next execution point
  */
 next();
};

module.exports = function (app) {
 app.get('/mock', mockController);
 app.get('/mock/:mockid', mockIdController);
};