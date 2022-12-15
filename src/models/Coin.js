const errorHandler = require('../libs/errorHandler');
const { HoldingAmountValidator } = require('../libs/Validator');

class Coin {
  COIN_500 = 500;
  COIN_100 = 100;
  COIN_50 = 50;
  COIN_10 = 10;
  #amount;

  constructor(holdingAmount) {
    this.#amount = Number(holdingAmount);
  }

  getDividedAmount() {
    let targetAmount = this.#amount;
    return [this.COIN_500, this.COIN_100, this.COIN_50, this.COIN_10].map(
      (coin) => {
        const count = this.divideAmount(targetAmount, coin);
        targetAmount -= count * coin;
        return count;
      }
    );
  }

  divideAmount(targetAmount, coin) {
    const count = Math.floor(targetAmount / coin);
    return count;
  }

  getChanges(inputAmount) {
    return this.#calCoinsTypesAndCount().map(([amount, count]) => {
      if (count === 0 || amount > inputAmount) return [amount, 0];
      const maxCahgesCount = Math.floor(inputAmount / amount);
      const changesCount = maxCahgesCount > count ? count : maxCahgesCount;
      inputAmount -= amount * changesCount;
      return [amount, changesCount];
    });
  }

  #calCoinsTypesAndCount() {
    const coinTypes = [
      this.COIN_500,
      this.COIN_100,
      this.COIN_50,
      this.COIN_10,
    ];
    return this.getDividedAmount().map((coin, index) => {
      return [coinTypes[index], coin];
    });
  }

  static validationHoldingAmount(holdingAmount) {
    try {
      HoldingAmountValidator.valiation(holdingAmount);
    } catch (error) {
      errorHandler(error);
      return false;
    }
    return true;
  }
}

module.exports = Coin;
