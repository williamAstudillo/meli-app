import { Product } from "./product";

export interface FavoritesRepository {
  getFavorites(): Promise<Product[] | undefined>;
  addFavorites(product: Product): Promise<Product[] | undefined>;
}
