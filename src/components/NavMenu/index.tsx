import Link from 'next/link';

import { navLinks } from './config';
import styles from './styles.module.scss';
import { INavMenuProps } from './types';

export const NavMenu = (props: INavMenuProps) => {
  const {onLink} = props;
  
  return (
    <nav className={styles.navMenu}>
      {navLinks.map(({ id, name, href }) => (
        <Link className={styles.navLink} key={id} href={href} onClick={onLink}>
          {name}
        </Link>
      ))}
    </nav>
  );
};
