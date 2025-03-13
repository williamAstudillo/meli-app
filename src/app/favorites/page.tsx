"use client";
import Card from "@src/components/atoms/card/Card";
import useGetFavorites from "@src/hooks/useGetFavorites";
import styles from "./Favorites.module.sass";

const FavoritesPage = () => {
  const { favorites } = useGetFavorites();
  return (
    <>
      {favorites.length > 0 ? (
        <ol className={styles.favorites}>
          {favorites?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ol>
      ) : (
        <section className={styles.favorites__container}>
          <p className={styles.favorites__text}>No hay favoritos</p>
        </section>
      )}
    </>
  );
};

export default FavoritesPage;
