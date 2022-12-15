const { InputView } = require('../views/IOView');

class Controller {
  init() {
    this.requestInputAmount();
  }

  requestInputAmount() {
    InputView.readInputAmount((inputAmount) =>
      this.handleInputAmount(inputAmount)
    );
  }

  handleInputAmount(inputAmount) {
    console.log('투입 금액:' + inputAmount);
  }
}

module.exports = Controller;
