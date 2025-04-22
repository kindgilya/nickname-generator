import React from "react";
import styles from "./button.module.scss";

interface IButtonProps {
  children: React.ReactNode,
  use: string,
  handler?: () => void,
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({ children, use, handler, disabled }) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${use}`]}`}
      onClick={handler}
      disabled={disabled}
    >
    {children}
    </button>
  );
};

export default Button;