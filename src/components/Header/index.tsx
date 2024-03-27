import { NavMenu } from '@components/NavMenu';
import { routes } from '@root/constants';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href={routes.home} className={styles.headerTitle}>
          Modsen Client Blog
        </Link>
        <div className={styles.headerControls}>
          <NavMenu />
          <button className={styles.videoButton} type="button">
            Video about us
          </button>
        </div>
      </div>
    </header>
  );
};
