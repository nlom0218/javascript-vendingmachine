const Coin = require('./Coin');
const Product = require('./Product');

class VendingMachine {
  #coin;
  #products = [];
  #inputAmount;
  #lowestProductAmount;

  setHoldingAmount(holdingAmount) {
    this.#coin = new Coin(holdingAmount);
  }

  getDividedAmount() {
    return this.#coin.getDividedAmount();
  }

  setProducts(products) {
    products = this.#productsConvertToArray(products);
    products.forEach(([name, price, count], idx) => {
      if (idx === 0) this.#lowestProductAmount = Number(price);
      if (price < this.#lowestProductAmount)
        this.#lowestProductAmount = Number(price);
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

  isCanPurchase() {
    if (this.#inputAmount < this.#lowestProductAmount) return false;

    const isEmpty = this.#products.every((product) => {
      if (product.getCount === 0) return true;
      return false;
    });
    if (isEmpty) return false;

    return true;
  }

  getChanges() {
    return this.#coin.getChanges(this.#inputAmount);
  }
}

module.exports = VendingMachine;
