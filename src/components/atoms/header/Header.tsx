"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.sass";
import useStore from "@src/store/useStore";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { setQuery } = useStore();
  const [querySearch, setQuerySearch] = useState<string>("");
  const handleSearch = () => {
    setQuery(querySearch);
    router.push(`/`);
  };
  return (
    <header className={styles.header}>
      <button
        className={styles.header__button__icon}
        onClick={() => router.push("/")}
      >
        <Image
          src="/logo.png"
          alt="Logo Mercado libre"
          width="60"
          height="40"
          className={styles.header__image}
        />
      </button>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className={styles.header__input}
        onChange={(e) => setQuerySearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button className={styles.header__button} onClick={handleSearch}>
        <div className={styles.header__search}>
          <Image
            src="/search.png"
            alt="Icono de busqueda"
            width="20"
            height="20"
          />
        </div>
      </button>
    </header>
  );
};

export default Header;
