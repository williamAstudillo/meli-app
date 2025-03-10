import Button from "@app/components/atoms/Button/Button";
import styles from "./ItemDetail.module.sass";
import Image from "next/image";

const ItemDetail = () => {
  const URL =
    "https://media.es.wired.com/photos/648c9a1ba566376ee967bf6a/master/pass/459293406";
  return (
    <section className={styles.itemDetail}>
      <div className={styles.itemDetail__container}>
        <Image
          src={URL}
          alt=""
          width={500}
          height={500}
          className={styles.ItemDetail__image}
        />
        <div className={styles.itemDetail__info}>
          <p className={styles.itemDetail__type}>Nuevo - 234 vendidos</p>
          <h1 className={styles.itemDetail__title}>
            Decoir reverse sombrero Oxford
          </h1>
          <p className={styles.itemDetail__price}>
            $ 1.980 <span className={styles.itemDetail__price_cens}>00</span>
          </p>
          <Button text="Comprar" />
        </div>
      </div>
      <div className={styles.itemDetail__description}>
        <h2 className={styles.itemDetail__description_title}>
          Descripción del producto
        </h2>
        <p className={styles.itemDetail__description_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          corrupti quae distinctio reiciendis eum praesentium consectetur ad ea
          culpa laboriosam beatae aut officiis, alias tenetur. Ad veritatis
          voluptas veniam doloremque!
        </p>
      </div>
    </section>
  );
};

export default ItemDetail;
