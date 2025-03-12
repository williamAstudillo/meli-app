export interface Product {
  condition: string;
  currency: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: number;
  title: string;
  description?: string;
  sold_quantity?: number;
  categoryId?: string;
}

export interface ProductData {
  products: Product[];
  categories: string[];
}
