class Product {
  #name;
  #price;
  #count;

  constructor({ name, price, count }) {
    this.#name = name;
    this.#price = Number(price);
    this.#count = Number(count);
  }

  getPurchasedPrice(productName) {
    console.log(this.#name);
    if (productName !== this.#name) return undefined;
    this.#count -= 1;
    return this.#price;
  }
}

module.exports = Product;
