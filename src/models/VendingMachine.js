const Coin = require('./Coin');

class VendingMachine {
  #coin;

  setInputAmount(inputAmount) {
    this.#coin = new Coin(inputAmount);
  }

  getDividedAmount() {
    return this.#coin.getDividedAmount();
  }
}

module.exports = VendingMachine;
