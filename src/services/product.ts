type Product = {
  title: String,
  description: String,
  price: String,
  image: String,
}

export const GetProducts = async () : Promise<Product[]> => {
  const response = await fetch('data/products.json');
  const products: Product[] = await response.json();
  return products.map(el => {
    return { 
      ...el,
      image: `https://fruitshoppe.firebaseapp.com/images/${el.image}` };
    });
}
