import styles from "./input.module.scss";
import cn from 'classnames';
import { InputHTMLAttributes } from 'react';
// Input

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const Input = ({
  label,
  containerClassName,
  labelClassName,
  inputClassName,
  ...inputProps
}: InputProps) => {
  return (
    <div className={cn(styles["input-group"], containerClassName)}>
      {label && (
        <label 
          className={cn(styles["input-group__title"], labelClassName)} 
          htmlFor={inputProps.id || 'input'}
        >
          {label}
        </label>
      )}
      <input 
        className={cn(styles["input-group__write"], inputClassName)}
        type={inputProps.type || 'text'}
        id={inputProps.id || 'input'}
        placeholder={inputProps.placeholder}
        {...inputProps}
      />
    </div>
  );
};

export default Input;