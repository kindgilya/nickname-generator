import styles from "./displayNickname.module.scss";
import cn from 'classnames';

interface NicknameDisplayProps {
    nickname?: string;
  }

const DisplayNickname = ({ nickname }: NicknameDisplayProps) => {
  return (
    <div className={cn(styles["display-nickname"])}>
        <h3 className={cn(styles["display-nickname__title"])}>Твой крутой новый ник:</h3>
        <span className={cn(styles["display-nickname__result"])}>{nickname}</span>
    </div>
  )
}

export default DisplayNickname