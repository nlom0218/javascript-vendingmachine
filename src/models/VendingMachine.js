const Coin = require('./Coin');
const Product = require('./Product');
const errorHandler = require('../libs/errorHandler');
const {
  ProductsValidator,
  InputAmountValidator,
  PurchaseProductValidator,
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
    this.#productsConvertToArray(products).forEach(
      ([name, price, count], idx) => {
        if (idx === 0) this.#lowestProductAmount = Number(price);
        if (price < this.#lowestProductAmount)
          this.#lowestProductAmount = Number(price);
        this.#products.push(new Product({ name, price, count }));
      }
    );
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
      if (product.getCount() === 0) return true;
      return false;
    });
    if (isEmpty) return false;

    return true;
  }

  getChanges() {
    return this.#coin.getChanges(this.#inputAmount);
  }

  validationProduct(products) {
    try {
      this.#productsConvertToArray(products).forEach((product) => {
        ProductsValidator.validtaion(product);
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

  validationPurchaseProduct(productName) {
    try {
      this.checkPurchaseProduct(productName);
    } catch (error) {
      errorHandler(error);
      return false;
    }
    return true;
  }

  checkPurchaseProduct(productName) {
    PurchaseProductValidator.validtaionName(productName, this.#products);
    PurchaseProductValidator.validationPrice(
      this.calPurchaseProductPrice(productName),
      this.#inputAmount
    );
  }

  calPurchaseProductPrice(productName) {
    let productPrice;
    this.#products.some((product) => {
      const purchasedPrice = product.getPurchasedPrice(productName);
      if (!purchasedPrice) return;

      productPrice = purchasedPrice;
      return true;
    });
    return productPrice;
  }
}

module.exports = VendingMachine;
