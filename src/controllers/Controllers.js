const VendingMachine = require('../models/VendingMachine');
const { InputView, OutputView } = require('../views/IOView');

class Controller {
  #vendingMachine = new VendingMachine();

  init() {
    this.requestHoldingAmount();
  }

  requestHoldingAmount() {
    InputView.readHoldingAmount((HoldingAmount) =>
      this.handleHoldingAmount(HoldingAmount)
    );
  }

  handleHoldingAmount(holdingAmount) {
    this.#vendingMachine.setHoldingAmount(holdingAmount);
    OutputView.printHoldingAmount(this.#vendingMachine.getDividedAmount());
    this.requestProducts();
  }

  requestProducts() {
    InputView.readProducts((products) => this.handleProducts(products));
  }

  handleProducts(products) {
    this.#vendingMachine.setProducts(products);
    this.requestInputAmount();
  }

  requestInputAmount() {
    InputView.readInputAmount((inputAmount) =>
      this.handleInputAmount(inputAmount)
    );
  }

  handleInputAmount(inputAmount) {
    this.#vendingMachine.setInputAmount(inputAmount);
    this.requestPurchaseProduct();
  }

  requestPurchaseProduct() {
    OutputView.printInputAmount(this.#vendingMachine.getInputAmount());
    InputView.readPurchaseProduct((purchaseProduct) =>
      this.handlePurchaseProduct(purchaseProduct)
    );
  }

  handlePurchaseProduct(purchaseProduct) {}
}

module.exports = Controller;
