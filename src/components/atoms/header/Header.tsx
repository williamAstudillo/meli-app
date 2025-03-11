"use client";
import Image from "next/image";
import styles from "./Header.module.sass";
import useStore from "@src/store/useStore";

const Header = () => {
  const { setQuery } = useStore();
  return (
    <header className={styles.header}>
      <Image
        src="/logo.png"
        alt="Logo Mercado libre"
        width="60"
        height="40"
        className={styles.header__image}
      />
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className={styles.header__input}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.header__search}>
        <Image
          src="/search.png"
          alt="Icono de busqueda"
          width="20"
          height="20"
        />
      </div>
    </header>
  );
};

export default Header;
