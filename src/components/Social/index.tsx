import { IAuthorLink } from '@root/types/common.ts';
import Link from 'next/link';

import { socialIcons } from './config.tsx';
import styles from './styles.module.scss';

export const Social = (props: { links: IAuthorLink[] }) => {
  const { links } = props;

  return (
    <nav className={styles.social}>
      {links.map(({ id, name, href }) => (
        <Link className={styles.socialLink} key={id} href={href}>
          {socialIcons[name]}
        </Link>
      ))}
    </nav>
  );
};
