import styles from "./nicknameInput.module.scss";
import cn from 'classnames';
import { InputHTMLAttributes } from 'react';

interface NicknameInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const NicknameInput = ({
  label = 'Введите ваше имя',
  containerClassName,
  labelClassName,
  inputClassName,
  ...inputProps
}: NicknameInputProps) => {
  return (
    <div className={cn(styles["input-group"], containerClassName)}>
      <label 
        className={cn(styles["input-group__title"], labelClassName)} 
        htmlFor={inputProps.id || 'name'}
      >
        {label}
      </label>
      <input 
        className={cn(styles["input-group__write"], inputClassName)}
        type="text"
        id={inputProps.id || 'name'}
        placeholder={inputProps.placeholder || 'Введите...'}
        {...inputProps}
      />
    </div>
  );
};

export default NicknameInput;