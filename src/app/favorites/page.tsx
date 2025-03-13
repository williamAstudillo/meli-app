"use client";
import Card from "@src/components/atoms/card/Card";
import useGetFavorites from "@src/hooks/useGetFavorites";
import styles from "./Favorites.module.sass";

const FavoritesPage = () => {
  const { favorites } = useGetFavorites();
  return (
    <>
      <ol className={styles.favorites}>
        {favorites?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ol>
    </>
  );
};

export default FavoritesPage;
