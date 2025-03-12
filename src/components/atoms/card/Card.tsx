import formatPrice from "@src/utils/formatPrice";
import styles from "./Card.module.sass";
import Image from "next/image";

interface CardProps {
  url: string;
  title: string;
  price: number;
}

const Card = ({ url, title, price }: CardProps) => {
  const { integerPart } = formatPrice(price);
  return (
    <section className={styles.card}>
      <Image
        src={url}
        alt=""
        height="200"
        width="200"
        className={styles.card__image}
      />
      <div className={styles.card__content}>
        <div className={styles.card__info}>
          <p className={styles.card__price}>$ {integerPart}</p>
          <h3 className={styles.card__title}>{title}</h3>
        </div>
      </div>
      <div className={styles.card__divider} />
    </section>
  );
};

export default Card;
