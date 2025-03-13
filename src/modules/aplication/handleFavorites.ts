import { FavoritesRepository } from "../domain/favoritesRepository";
import { Product } from "../domain/product";

export async function getFavorites(productRepository: FavoritesRepository) {
  return productRepository.getFavorites();
}
export async function addFavorites(
  productRepository: FavoritesRepository,
  product: Product
) {
  return productRepository.addFavorites(product);
}
