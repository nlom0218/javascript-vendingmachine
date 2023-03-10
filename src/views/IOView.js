const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { Console } = require('@woowacourse/mission-utils');

const IOView = {
  InputView,
  OutputView,

  exit() {
    Console.close();
  },

  printError(error) {
    Console.print(`\n${error}`);
  },
};

module.exports = IOView;
