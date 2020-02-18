import { CheckoutData } from '../types/checkout';

const validateCheckout = (checkoutData: CheckoutData) => {
  if (checkoutData.paymentInfo.billingAddress.street2 === undefined) {
    throw new Error('billing address street 2 is required');
  }
};

export const makePurchase = (checkoutData: CheckoutData) => {
  validateCheckout(checkoutData);
};