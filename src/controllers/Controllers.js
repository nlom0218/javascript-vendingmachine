const VendingMachine = require('../models/VendingMachine');
const { InputView, OutputView, exit } = require('../views/IOView');

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

  handlePurchaseProduct(purchaseProduct) {
    this.#vendingMachine.purchaseProduct(purchaseProduct);
    const isCanPurchase = this.#vendingMachine.isCanPurchase();
    if (isCanPurchase) return this.requestPurchaseProduct();
    this.returnChange();
  }

  returnChange() {
    OutputView.printInputAmount(this.#vendingMachine.getInputAmount());
    OutputView.printChanges(this.#vendingMachine.getChanges());
    exit();
  }
}

module.exports = Controller;
