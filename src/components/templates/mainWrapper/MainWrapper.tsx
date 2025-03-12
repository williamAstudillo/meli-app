import Header from "@src/components/atoms/header/Header";
import styles from "./MainWrapper.module.sass";
interface MainWrapperProps {
  children: React.ReactNode;
}
const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <main className={styles.container}>
      <Header />
      {children}
    </main>
  );
};

export default MainWrapper;
