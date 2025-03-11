import styles from "./Card.module.sass";
import Image from "next/image";

interface CardProps {
  url: string;
  title: string;
  price: number;
  city: string;
}

const Card = ({ url, title, price, city }: CardProps) => {
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
          <p className={styles.card__price}>$ {price}</p>
          <h3 className={styles.card__title}>{title}</h3>
        </div>
        <div className={styles.card__city}>
          <p>{city}</p>
        </div>
      </div>
      <div className={styles.card__divider} />
    </section>
  );
};

export default Card;
