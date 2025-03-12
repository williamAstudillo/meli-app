import { Product, ProductData } from "./product";

export interface ProductRepository {
  getProducts(query: string): Promise<ProductData | undefined>;
  getProductDetail(id: string): Promise<Product | undefined>;
  getCategories(id: string): Promise<string[] | undefined>;
}
