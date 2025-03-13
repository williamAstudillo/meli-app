"use client";
import styles from "./home.module.sass";

export default function Home() {
  return (
    <>
      <section className={styles.home}>
        <p className={styles.home__text}>¡Bienvenido!</p>
      </section>
    </>
  );
}
