import Link from 'next/link';

import styles from './styles.module.scss';
import { IButtonProps } from './types';

export const Button = (props: IButtonProps) => {
  const { text, href } = props;

  return (
    <Link href={href || '#'} className={styles.button}>
      {text}
    </Link>
  );
};
