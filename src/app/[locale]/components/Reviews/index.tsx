import { Slider } from '@components/Slider';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { slides } from './config';
import styles from './styles.module.scss';

export const Reviews = () => {
  const t = useTranslations('Main.Reviews');

  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsInfo}>
        <p className={classNames('subtitle', styles.reviewsSubtitle)}>
          {t('subtitle').toUpperCase()}
        </p>
        <h2 className={classNames('title', styles.reviewsTitle)}>
          {t('title')}
        </h2>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <Slider slides={slides} />
    </section>
  );
};
