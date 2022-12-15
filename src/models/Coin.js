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
}

module.exports = Coin;
