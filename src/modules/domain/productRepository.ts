import { ProductData } from "./product";

export interface ProductRepository {
  getProducts(query: string): Promise<ProductData>;
}
