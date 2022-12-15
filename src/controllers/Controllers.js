const VendingMachine = require('../models/VendingMachine');
const { InputView } = require('../views/IOView');

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
    console.log(this.#vendingMachine.getDividedAmount());
  }
}

module.exports = Controller;
