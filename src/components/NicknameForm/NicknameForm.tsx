import { IoMdClose } from "react-icons/io";
import styles from "./nicknameForm.module.scss";
import cn from 'classnames';

const NicknameForm = () => {
  return (
    <div className={cn(styles["nickname-form"])}>
        <div className={cn(styles["nickname-form__header"])}>
        <img className={cn(styles["icq-logo"])} src="../public/images/ICQ_logo.svg" alt="ICQ_logo" />
        <div className="nickname-form__wrap">
        <span className={cn(styles["nickname-form__collapse"])}>–</span>
        <IoMdClose />
        </div>
        </div>
        <div className={cn(styles["nickname-form__wpapper"])}>
            <div className={cn(styles["nickname-form__icon"])}>
            <img className={cn(styles["icq-icon"])} src="../public/images/ICQ_icon.png" alt="ICQ_icon" />  
            </div>
            <div className={cn(styles["input-group"])}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" placeholder="Введите ваше имя"></input>
            </div>

            <button className={cn(styles["btn btn-generate"])} >Сгенерировать ник</button>
            
            <div className={cn(styles["nickname-form__container"])}>
                <h3 className={cn(styles["nickname-form__result-title"])}>Ваш новый ник:</h3>
                <span className={cn(styles["nickname-form__result"])}>Здесь появится результат</span>
            </div>
        </div>
        
        <div className={cn(styles["nickname-form__footer"])}>
            © ICQ LLC. 2010
        </div>
    </div>
  )
}

export default NicknameForm