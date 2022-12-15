const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readInputAmount(callback) {
    Console.readLine(
      '자판기가 보유하고 있는 금액을 입력해 주세요.\n',
      callback
    );
  },
};

module.exports = InputView;
