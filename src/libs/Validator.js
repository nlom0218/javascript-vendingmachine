const HoldingAmountValidator = require('./HoldingAmountValidator');
const InputAmountValidator = require('./InputAmountValidator');
const ProductsValidator = require('./ProductsValidator');
const PurchaseProductValidator = require('./PurchaseProductValidator');

const Validator = {
  HoldingAmountValidator,
  ProductsValidator,
  InputAmountValidator,
  PurchaseProductValidator,
};

module.exports = Validator;
