import styles from "./nicknameInput.module.scss";
import cn from 'classnames';

const DisplayNickname = () => {
  return (
    <div className={cn(styles["display-nickname"])}>
        <h3 className={cn(styles["display-nickname__title"])}>Ваш новый ник:</h3>
        <span className={cn(styles["display-nickname__result"])}>Здесь появится результат</span>
    </div>
  )
}

export default DisplayNickname