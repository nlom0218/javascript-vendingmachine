const IOView = require('../views/IOView');

function errorHandler(error) {
  IOView.printError(error);
}

module.exports = errorHandler;
