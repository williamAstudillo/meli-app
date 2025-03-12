import { ProductData } from "@src/modules/domain/product";
import { ProductRepository } from "@src/modules/domain/productRepository";

export async function getProducts(
  productRepository: ProductRepository,
  query: string
): Promise<ProductData | undefined> {
  return productRepository.getProducts(query);
}

export async function getProductDetail(
  productRepository: ProductRepository,
  id: string
) {
  return productRepository.getProductDetail(id);
}
export async function getCategories(
  productRepository: ProductRepository,
  id: string
) {
  return productRepository.getCategories(id);
}
