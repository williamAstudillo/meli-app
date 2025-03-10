import Link from "next/link";
import styles from "./BreadCrumb.module.sass";

const BreadCrumb = () => {
  const CATEGORIES = [
    "Electronica, audio y video",
    "Ipod",
    "Reproductores",
    "Ipod touch",
    "32 GB",
  ];
  return (
    <nav className={styles.breadcrumb}>
      <ol className={styles.breadcrumb__list}>
        {CATEGORIES.map((category, index) => (
          <li key={index} className={styles.breadcrumb__item}>
            <Link href="#">
              {category + " " + (index === CATEGORIES.length - 1 ? "" : " > ")}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
