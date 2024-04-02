import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { navLinks } from './config';
import styles from './styles.module.scss';
import { INavMenuProps } from './types';

export const NavMenu = (props: INavMenuProps) => {
  const { onLink } = props;

  const t = useTranslations('NavMenu');

  return (
    <nav className={styles.navMenu}>
      {navLinks.map(({ id, key, href }) => (
        <Link className={styles.navLink} key={id} href={href} onClick={onLink}>
          {t(key)}
        </Link>
      ))}
    </nav>
  );
};
