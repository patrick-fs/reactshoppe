import { Product } from './product';

export interface PaymentInfo {
  shippingAddress: Address;
  billingAddress: Address;
  ccName: string;
  ccNumber: string;
  ccExpiration: string;
  ccCVV: string;
};

export interface Address {
  street1: string;
  street2: string;
  country: string;
  state: string;
  zip: string;
};

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
};

export interface CheckoutData {
  paymentInfo: PaymentInfo;
  contactInfo: ContactInfo;
  products: Product[];
}