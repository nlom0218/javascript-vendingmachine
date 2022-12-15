const Coin = require('./Coin');
const Product = require('./Product');

class VendingMachine {
  #coin;
  #products = [];
  #inputAmount;

  setHoldingAmount(holdingAmount) {
    this.#coin = new Coin(holdingAmount);
  }

  getDividedAmount() {
    return this.#coin.getDividedAmount();
  }

  setProducts(products) {
    products = this.#productsConvertToArray(products);
    products.forEach(([name, price, count]) => {
      this.#products.push(new Product({ name, price, count }));
    });
  }

  #productsConvertToArray(products) {
    return products
      .split(';')
      .map((product) => product.slice(1, -1).split(','));
  }

  setInputAmount(inputAmount) {
    this.#inputAmount = inputAmount;
  }
}

module.exports = VendingMachine;
