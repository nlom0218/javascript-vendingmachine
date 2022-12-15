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
  }
}

module.exports = Controller;
