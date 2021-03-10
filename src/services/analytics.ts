import { Product } from "../types/product";
import * as FullStory from '@fullstory/browser';

export const trackCartSize = (products: Product[]) => {
  const totalCartRevenue = products.reduce((total, current) => {
    return total + current.price;
  }, 0);

  let avgRevenuePerItem = products.length > 0 ? totalCartRevenue / products.length : 0;

  if (isNaN(avgRevenuePerItem)) throw new Error('NaN');

  const val = parseFloat(avgRevenuePerItem.toFixed(2));
  
  console.log(`avgRevenuePerItem: ${val}`);

  FullStory.event('Revenue per cart item', { avgRevenuePerItem_real: avgRevenuePerItem });
}