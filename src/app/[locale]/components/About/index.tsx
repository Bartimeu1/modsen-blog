import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const About = () => {
  const t = useTranslations('Main.About');

  return (
    <div className={styles.about}>
      <div className={styles.aboutBlock}>
        <p className="subtitle">{t('aboutSubtitle').toUpperCase()}</p>
        <h2 className={styles.aboutTitle}>{t('aboutTitle')}</h2>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link className={styles.aboutLink} href="#">
          {t('readMore')}
        </Link>
      </div>
      <div className={styles.aboutBlock}>
        <p className="subtitle">{t('missionSubtitle').toUpperCase()}</p>
        <h3 className={styles.missionTitle}>{t('missionTitle')}</h3>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};
