import { Product } from "../types/product";
import * as FullStory from '@fullstory/browser';

export const trackCartSize = (products: Product[]) => {
  const totalCartRevenue = products.reduce((total, current) => {
    return total + current.price;
  }, 0);

  let avgRevenuePerItem = totalCartRevenue / products.length;

  if (isNaN(avgRevenuePerItem)) throw new Error('NaN');

  const val = parseFloat(avgRevenuePerItem.toFixed(2));
  
  console.log(`avgRevenuePerItem: ${val}`);

  if (products.length < 2) {
    throw new Error("Less than two items in cart");
  }

  FullStory.event('Revenue per cart item', { avgRevenuePerItem_real: avgRevenuePerItem });
}