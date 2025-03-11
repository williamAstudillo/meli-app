"use client";
import Link from "next/link";
import styles from "./BreadCrumb.module.sass";
import useStore from "@src/store/useStore";

const BreadCrumb = () => {
  const { categories } = useStore();
  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.breadcrumb__list}>
        {categories.map((category, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            <Link href="#">
              {category + " " + (index === categories.length - 1 ? "" : " > ")}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
