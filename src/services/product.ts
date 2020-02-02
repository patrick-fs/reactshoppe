export type Product = {
  title: string,
  description: string,
  price: string,
  image: string,
}

export const getProducts = async () : Promise<Product[]> => {
  const response = await fetch(`${process.env.PUBLIC_URL}/data/products.json`);
  const products: Product[] = await response.json();
  return products.map(el => {
    return { 
        ...el,
        image: `https://fruitshoppe.firebaseapp.com/images/${el.image}`
      };
    });
}
