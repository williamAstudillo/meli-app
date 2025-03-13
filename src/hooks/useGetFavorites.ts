import { getFavorites } from "@src/modules/aplication/handleFavorites";
import { Product } from "@src/modules/domain/product";
import { handleFavoritesRepository } from "@src/modules/infraestructure/handleFavoritesRepository";
import { useEffect, useState } from "react";

const useGetFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  useEffect(() => {
    fetchFavorites();
  }, []);
  const fetchFavorites = async () => {
    const favorites = await getFavorites(handleFavoritesRepository());
    if (favorites) {
      setFavorites(favorites);
    }
  };

  return { favorites };
};

export default useGetFavorites;
