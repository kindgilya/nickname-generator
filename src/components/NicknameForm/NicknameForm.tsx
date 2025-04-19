import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import styles from "./nicknameForm.module.scss";
import cn from 'classnames';
import Image from "../Image/Image";
import Button from "../Button/Button";
import { generateNickname } from '../../utils/nicknameTemplates';
import NicknameInput from '../NicknameInput/NicknameInput';

const NicknameForm = () => {
    const [name, setName] = useState('');

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
            onChange={(e) => setName(e.target.value)}
            placeholder="Например, Маша"
        />

        <Button use="generate" handler={()=>{console.log(generateNickname(name))}}>Сгенерировать ник</Button>
            
        <div className={cn(styles["nickname-form__container"])}>
            <h3 className={cn(styles["nickname-form__result-title"])}>Ваш новый ник:</h3>
            <span className={cn(styles["nickname-form__result"])}>Здесь появится результат</span>
        </div>

        <div className={cn(styles["nickname-form__footer"])}>
            © ICQ LLC. 2010
        </div>
        </div>
        
    </div>
  )
}

export default NicknameForm