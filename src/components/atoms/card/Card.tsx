import formatPrice from "@src/utils/formatPrice";
import styles from "./Card.module.sass";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@src/modules/domain/product";
import FavoriteButton from "@src/components/atoms/favoriteButton/FavoriteButton";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  const { integerPart } = formatPrice(product.price);
  return (
    <li className={styles.card}>
      <Image
        src={product.picture}
        alt=""
        height="200"
        width="200"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <div className={styles.card__info}>
          <p className={styles.card__price}>$ {integerPart}</p>
          <Link
            href={`/items/${product.id}`}
            key={product.id}
            className={styles.card__link}
          >
            <h3 className={styles.card__title}>{product.title}</h3>
          </Link>
        </div>
      </div>
      <div className={styles.card__icon}>
        <FavoriteButton product={product} />
      </div>
      <div className={styles.card__divider} />
    </li>
  );
};

export default Card;
