const Controller = require('./controllers/Controllers');

class App {
  #controller = new Controller();

  play() {
    this.#controller.init();
  }
}

const app = new App();
app.play();

module.exports = App;
