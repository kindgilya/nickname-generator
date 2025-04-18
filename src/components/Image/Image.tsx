import styles from "./image.module.scss";
import cn from 'classnames';

interface ImageProps {
    link: string;
    name: string;
    alternative?: string;
  }


const Image = ({link, name, alternative}: ImageProps) => {
  return (
    <img className={cn(styles[`${name}`])} src={link} alt={alternative ? alternative : ''} />
  )
}

export default Image