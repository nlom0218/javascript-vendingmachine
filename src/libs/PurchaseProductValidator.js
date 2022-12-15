const PurchaseProductValidator = {
  validtaionName(productName, products) {
    PurchaseProductValidator.isIncludes(productName, products);
  },

  validationPrice(productPrice, remainingAmount) {
    PurchaseProductValidator.isGreaterThanRemainingAmount(
      productPrice,
      remainingAmount
    );
  },

  isIncludes(productName, products) {
    const isExist = products.some((product) => {
      return product.isMine(productName);
    });

    if (!isExist)
      throw new Error('[ERROR] 자판기에 해당 제품이 존재하지 않습니다.');
  },

  isGreaterThanRemainingAmount(productPrice, remainingAmount) {
    if (productPrice > remainingAmount)
      throw new Error(
        '[ERROR] 구입하는 제품의 금액이 투입된 금액보다 작습니다.'
      );
  },
};

module.exports = PurchaseProductValidator;
