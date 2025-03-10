"use client";
import styles from "./Button.module.sass";
interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return (
    <button onClick={() => {}} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
