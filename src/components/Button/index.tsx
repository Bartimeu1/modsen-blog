import Link from 'next/link';

import { IButtonProps } from './types';

import styles from './styles.module.scss';

export const Button = (props: IButtonProps) => {
  const { text, href } = props;

  return (
    <Link href={href || '#'} className={styles.button}>
      {text}
    </Link>
  );
};
