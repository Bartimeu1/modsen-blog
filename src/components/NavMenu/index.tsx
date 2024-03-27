import Link from 'next/link';

import { navLinks } from './config';
import styles from './styles.module.scss';

export const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      {navLinks.map(({ id, name, href }) => (
        <Link className={styles.navLink} key={id} href={href}>
          {name}
        </Link>
      ))}
    </nav>
  );
};
