import { Product } from "@src/modules/domain/product";
import Button from "../../atoms/Button/Button";
import styles from "./ItemDetail.module.sass";
import Image from "next/image";
import formatPrice from "@src/utils/formatPrice";
import FavoriteButton from "../../atoms/favoriteButton/FavoriteButton";

interface ItemDetailProps {
  productDetail: Product | undefined;
}
const ItemDetail = ({ productDetail }: ItemDetailProps) => {
  const { cents, integerPart } = formatPrice(productDetail?.price);
  return (
    <section className={styles.itemDetail}>
      <div className={styles.itemDetail__container}>
        <Image
          src={productDetail?.picture || ""}
          alt={productDetail?.title || "Imagen del producto"}
          width={500}
          height={500}
          className={styles.ItemDetail__image}
        />
        <div className={styles.itemDetail__info}>
          <div className={styles.itemDetail__info__container}>
            <p className={styles.itemDetail__type}>
              {productDetail?.condition === "new"
                ? "Nuevo"
                : productDetail?.condition}{" "}
              - {productDetail?.sold_quantity} vendidos
            </p>
            {productDetail && <FavoriteButton product={productDetail} />}
          </div>
          <h1 className={styles.itemDetail__title}>{productDetail?.title}</h1>
          <p className={styles.itemDetail__price}>
            ${integerPart}{" "}
            <span className={styles.itemDetail__price_cens}>{cents}</span>
          </p>
          <Button text="Comprar" />
        </div>
      </div>
      <div className={styles.itemDetail__description}>
        <h2 className={styles.itemDetail__description_title}>
          Descripción del producto
        </h2>
        <p className={styles.itemDetail__description_text}>
          {productDetail?.description}
        </p>
      </div>
    </section>
  );
};

export default ItemDetail;
