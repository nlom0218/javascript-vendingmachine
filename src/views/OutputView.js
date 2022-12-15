const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  coins: ['500원', '100원', '50원', '10원'],

  printHoldingAmount(dividedAmount) {
    Console.print('\n자판기가 보유한 동전');
    this.coins.forEach((coin, index) => {
      Console.print(`${coin} - ${dividedAmount[index]}개`);
    });
  },

  printInputAmount(inputAmount) {
    Console.print(`\n투입 금액: ${inputAmount}원`);
  },

  printChanges(changes) {
    Console.print(`잔돈`);
    changes.forEach(([amount, count]) => {
      if (count > 0) Console.print(`${amount}원 - ${count}개`);
    });
  },
};

module.exports = OutputView;
