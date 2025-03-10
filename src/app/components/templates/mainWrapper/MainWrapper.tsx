import Header from "@app/components/atoms/header/Header";
import BreadCrumb from "@app/components/atoms/breadCrumb/BreadCrumb";
import styles from "./MainWrapper.module.sass";
interface MainWrapperProps {
  children: React.ReactNode;
}
const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className={styles.container}>
      <Header />
      <BreadCrumb />
      {children}
    </main>
  );
};

export default MainWrapper;
