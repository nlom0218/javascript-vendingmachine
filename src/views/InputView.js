const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readHoldingAmount(callback) {
    Console.readLine(
      '자판기가 보유하고 있는 금액을 입력해 주세요.\n',
      callback
    );
  },

  readProducts(callback) {
    Console.readLine('\n상품명과 가격, 수량을 입력해 주세요.\n', callback);
  },

  readInputAmount(callback) {
    Console.readLine('\n투입 금액을 입력해 주세요.\n', callback);
  },
};

module.exports = InputView;
