const HoldingAmountValidator = {
  valiation(holdingAmount) {
    HoldingAmountValidator.isNumber(holdingAmount);
    HoldingAmountValidator.isMultiplesOfTen(holdingAmount);
  },

  isNumber(holdingAmount) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(holdingAmount))
      throw new Error('[ERROR] 투입 금액은 숫자이어야 합니다.');
  },

  isMultiplesOfTen(holdingAmount) {
    if (holdingAmount % 10 !== 0)
      throw new Error('[ERROR] 투입 금액은 10원 단위어야 합니다.');
  },
};

module.exports = HoldingAmountValidator;
