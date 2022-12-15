const Coin = require('./Coin');

class VendingMachine {
  #coin;
  #products = [];

  setInputAmount(inputAmount) {
    this.#coin = new Coin(inputAmount);
  }

  getDividedAmount() {
    return this.#coin.getDividedAmount();
  }

  setProducts(products) {
    products = this.#productsConvertToArray(products);
    products.forEach(([name, price, count]) => {
      this.#products.push({ name, price: Number(price), count: Number(count) });
    });

    console.log(this.#products);
  }

  #productsConvertToArray(products) {
    return products
      .split(';')
      .map((product) => product.slice(1, -1).split(','));
  }
}

module.exports = VendingMachine;
