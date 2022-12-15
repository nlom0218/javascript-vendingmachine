const InputAmountValidator = {
  validation(inputAmount, lowestProductAmount) {
    InputAmountValidator.isNumber(inputAmount);
    InputAmountValidator.isGreaterThanMinAmount(
      inputAmount,
      lowestProductAmount
    );
  },

  isNumber(inputAmount) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(inputAmount))
      throw new Error('[ERROR] 투입 금액은 숫자이어야 합니다.');
  },

  isGreaterThanMinAmount(inputAmount, lowestProductAmount) {
    if (inputAmount < lowestProductAmount)
      throw new Error('[ERROR] 투입 금액은 상품의 최소 금액보다 커야합니다.');
  },
};

module.exports = InputAmountValidator;
