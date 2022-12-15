const ProductsValidator = {
  valitaion([_, price, count]) {
    ProductsValidator.isNumber(price, count);
    ProductsValidator.isGreaterThanMinAmount(price);
    ProductsValidator.isMultiplesOfTen(price);
    ProductsValidator.isGreaterThanZero(count);
  },

  isNumber(price, count) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(price) | !numberRegExp.test(count))
      throw new Error('[ERROR] 상품 금액과 상품 개수는 숫자이어야 합니다.');
  },

  isGreaterThanMinAmount(price) {
    if (price < 100)
      throw new Error('[ERROR] 상품 금액은 100원보다 커야 합니다.');
  },

  isMultiplesOfTen(price) {
    if (price % 10 !== 0)
      throw new Error('[ERROR] 상품 금액은 10원으로 나누어떨어져야 합니다.');
  },

  isGreaterThanZero(count) {
    if (count < 1) throw new Error('[ERROR] 상품 개수는 0이상이어야 합니다.');
  },
};

module.exports = ProductsValidator;
