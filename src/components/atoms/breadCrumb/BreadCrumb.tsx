"use client";
import Link from "next/link";
import styles from "./BreadCrumb.module.sass";
import useStore from "@src/store/useStore";

interface BreadCrumbProps {
  categories: string[];
}

const BreadCrumb = ({ categories }: BreadCrumbProps) => {
  const { categories: categoriesStore } = useStore();
  const _categories = categories.length > 0 ? categories : categoriesStore;
  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.breadcrumb__list}>
        {_categories?.map((category, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            <Link href="#">
              {category + " " + (index === _categories.length - 1 ? "" : " > ")}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
