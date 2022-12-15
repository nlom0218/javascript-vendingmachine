const Coin = require('./Coin');
const Product = require('./Product');
const Convert = require('../libs/Convert');
const errorHandler = require('../libs/errorHandler');
const {
  ProductsValidator,
  InputAmountValidator,
} = require('../libs/Validator');

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
    Convert.stringToArray(products).forEach(([name, price, count], idx) => {
      if (idx === 0) this.#lowestProductAmount = Number(price);
      if (price < this.#lowestProductAmount)
        this.#lowestProductAmount = Number(price);
      this.#products.push(new Product({ name, price, count }));
    });
  }

  setInputAmount(inputAmount) {
    this.#inputAmount = inputAmount;
  }

  getInputAmount() {
    return this.#inputAmount;
  }

  getLowestProductAmount() {
    return this.#lowestProductAmount;
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
      if (product.getCount() === 0) return true;
      return false;
    });
    if (isEmpty) return false;

    return true;
  }

  getChanges() {
    return this.#coin.getChanges(this.#inputAmount);
  }

  static validationProduct(products) {
    try {
      Convert.stringToArray(products).forEach((product) => {
        ProductsValidator.valitaion(product);
      });
    } catch (error) {
      errorHandler(error);
      return false;
    }
    return true;
  }

  validationInputAmount(inputAmount) {
    try {
      InputAmountValidator.validation(inputAmount, this.#lowestProductAmount);
    } catch (error) {
      errorHandler(error);
      return false;
    }
    return true;
  }
}

module.exports = VendingMachine;
