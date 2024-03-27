import styles from './styles.module.scss';
import { IButtonProps } from './types';

export const Button = (props: IButtonProps) => {
  const { text, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick} type="button">
      {text}
    </button>
  );
};
