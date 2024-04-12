import Link from 'next/link';

import { socialIcons } from './config.tsx';
import { ISocialProps } from './types.ts';

import styles from './styles.module.scss';

export const Social = (props: ISocialProps) => {
  const { links } = props;

  return (
    <nav className={styles.social}>
      {links.map(({ id, name, href }) => (
        <Link
          className={styles.socialLink}
          key={id}
          href={href}
          aria-label={name}
          data-testid="user-social-link"
        >
          {socialIcons[name]}
        </Link>
      ))}
    </nav>
  );
};
