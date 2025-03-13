import { FavoritesRepository } from "@src/modules/domain/favoritesRepository";
import axiosInstance from "./axios/axios";
import { Product } from "../domain/product";

export function handleFavoritesRepository(): FavoritesRepository {
  return {
    getFavorites,
    addFavorites,
  };
}

const getFavorites = async (): Promise<Product[] | undefined> => {
  try {
    const response = await axiosInstance.get<Product[]>("/favorites/get");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addFavorites = async (
  product: Product
): Promise<Product[] | undefined> => {
  try {
    const response = await axiosInstance.post<Product[]>("/favorites/add", {
      product,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
