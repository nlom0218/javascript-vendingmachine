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

  getInputAmount() {
    return this.#inputAmount;
  }

  purchaseProduct(productName) {
    this.#products.some((product) => {
      const purchasedPrice = product.getPurchasedPrice(productName);
      if (!purchasedPrice) return;

      this.#inputAmount -= purchasedPrice;
      return true;
    });
  }
}

module.exports = VendingMachine;
