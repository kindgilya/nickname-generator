import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import styles from "./nicknameForm.module.scss";
import cn from 'classnames';
import Image from "../Image/Image";
import Button from "../Button/Button";
import { generateNickname } from '../../utils/nicknameTemplates';
import NicknameInput from '../NicknameInput/NicknameInput';
import DisplayNickname from '../DisplayNickname/DisplayNickname';

const NicknameForm = () => {
    const [name, setName] = useState('');
    const [transformedName, setTransformedName] = useState('');

    const handleSubmit = (): void => {
        if (!name.trim()) {
            setTransformedName('');
            return;
        }
        setTransformedName(generateNickname(name));
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setName(newName);
        if (!newName.trim()) {
            setTransformedName('');
        }
    }

  return (
    <div className={cn(styles["nickname-form"])}>
        <div className={cn(styles["nickname-form__header"])}>
            <Image link="../public/images/ICQ_logo.svg" name="icq-logo" alternative="ICQ_logo"/>
        <div className="nickname-form__wrap">
            <span className={cn(styles["nickname-form__collapse"])}>–</span>
            <IoMdClose />
        </div>
        </div>
        <div className={cn(styles["nickname-form__wpapper"])}>
        <div className={cn(styles["nickname-form__icon"])}>
            <Image link="../public/images/ICQ_icon.png" name="icq-icon" alternative="ICQ_icon"/>
        </div>
        <NicknameInput 
            label="Введите ваше имя"
            onChange={handleNameChange}
            placeholder="Например, Маша"
        />
        <Button use="generate" handler={handleSubmit} disabled={!name.trim()}>Сгенерировать ник</Button>
        <DisplayNickname nickname={transformedName != "" ? transformedName : 'Здесь появится результат'}></DisplayNickname>
        <div className={cn(styles["nickname-form__footer"])}>
            © ICQ LLC. 2010
        </div>
        </div>
        
    </div>
  )
}

export default NicknameForm