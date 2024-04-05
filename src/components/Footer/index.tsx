import { Button } from '@components/Button';
import { NavMenu } from '@components/NavMenu';
import { Social } from '@components/Social';
import { routes } from '@root/constants';
import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { mockedNetworkLinks } from './config';
import styles from './styles.module.scss';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={classNames('container', styles.footerContainer)}>
        <div className={styles.footerTopper}>
          <Link href={routes.home} className={styles.topperLink}>
            Modsen Client Blog
          </Link>
          <NavMenu />
        </div>
        <div className={styles.subscribe}>
          <h2 className={styles.subscribeTitle}>{t('title')}</h2>
          <div className={styles.subscribeControls}>
            <input
              className={styles.subscribeInput}
              type="text"
              placeholder={t('input')}
            />
            <Button text={t('button')} />
          </div>
        </div>
        <div className={styles.footerBottomer}>
          <div>
            <p className={styles.bottomerText}>Finstreet 118 2561 Fintown</p>
            <p className={styles.bottomerText}>
              Hello@finsweet.com 020 7993 2905
            </p>
          </div>
          <Social links={mockedNetworkLinks} />
        </div>
      </div>
    </footer>
  );
};
