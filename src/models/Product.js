class Product {
  #name;
  #price;
  #count;

  constructor({ name, price, count }) {
    this.#name = name;
    this.#price = Number(price);
    this.#count = Number(count);
  }
}

module.exports = Product;
