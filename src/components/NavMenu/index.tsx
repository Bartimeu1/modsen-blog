import { usePathname } from '@root/navigation';
import { extractPathFromURL } from '@utils/helpers';
import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { navLinks } from './config';
import { INavMenuProps } from './types';

import styles from './styles.module.scss';

export const NavMenu = (props: INavMenuProps) => {
  const { onLink } = props;

  const t = useTranslations('NavMenu');

  const pathname = usePathname();
  const targetRoute = extractPathFromURL(pathname);

  return (
    <nav className={styles.navMenu}>
      {navLinks.map(({ id, key, href, testId }) => (
        <Link
          data-testid={testId}
          className={classNames(styles.navLink, {
            [styles.target]: targetRoute === href,
          })}
          key={id}
          href={href}
          onClick={onLink}
        >
          {t(key)}
        </Link>
      ))}
    </nav>
  );
};
