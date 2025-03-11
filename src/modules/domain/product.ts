export interface Product {
  condition: string;
  currency: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: number;
  title: string;
}

export interface ProductData {
  products: Product[];
  categories: string[];
}
