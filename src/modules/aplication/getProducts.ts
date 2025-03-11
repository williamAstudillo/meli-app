import { ProductData } from "@src/modules/domain/product";
import { ProductRepository } from "@src/modules/domain/productRepository";

export async function getProducts(
  productRepository: ProductRepository,
  query: string
): Promise<ProductData> {
  return productRepository.getProducts(query);
}
