"use client";
import SvgHeart from "@src/icons/components/SvgHeart";
import styles from "./FavoriteButton.module.sass";
import { useEffect, useState } from "react";
import { Product } from "@src/app/api/types";
import { handleFavoritesRepository } from "@src/modules/infraestructure/handleFavoritesRepository";
import { addFavorites } from "@src/modules/aplication/handleFavorites";

interface FavoriteButtonProps {
  product: Product;
}
const FavoriteButton = ({ product }: FavoriteButtonProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const favoritesIds = localStorage.getItem("favoritesIds");
    if (favoritesIds) {
      const favoritesArray = JSON.parse(favoritesIds);
      const isFavorite = favoritesArray.some(
        (favoriteId: string) => favoriteId === product.id
      );
      setIsLiked(isFavorite);
    }
  }, []);

  const addFavorite = async (product: Product) => {
    const favorites = await addFavorites(handleFavoritesRepository(), product);
    const favoritesIds = favorites?.map((favorite: Product) => favorite.id);
    localStorage.setItem("favoritesIds", JSON.stringify(favoritesIds));
  };

  const handleClick = () => {
    setIsLiked(!isLiked);
    addFavorite(product);
  };
  return (
    <button className={styles.favoriteButton} onClick={handleClick}>
      <SvgHeart
        fillColor={isLiked ? "#3483fa" : "#fff"}
        strokeColor="#3483fa"
      />
    </button>
  );
};

export default FavoriteButton;
