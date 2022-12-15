const VendingMachine = require('../models/VendingMachine');
const { InputView, OutputView } = require('../views/IOView');

class Controller {
  #vendingMachine = new VendingMachine();

  init() {
    this.requestInputAmount();
  }

  requestInputAmount() {
    InputView.readInputAmount((inputAmount) =>
      this.handleInputAmount(inputAmount)
    );
  }

  handleInputAmount(inputAmount) {
    this.#vendingMachine.setInputAmount(inputAmount);
    OutputView.printHoldingAmount(this.#vendingMachine.getDividedAmount());
    this.requestProducts();
  }

  requestProducts() {
    InputView.readProducts((products) => this.handleProducts(products));
  }

  handleProducts(products) {}
}

module.exports = Controller;
