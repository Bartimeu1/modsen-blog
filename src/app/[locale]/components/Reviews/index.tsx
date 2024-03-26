import { Slider } from '@components/Slider';
import classNames from 'classnames';

import { slides } from './config';
import styles from './styles.module.scss';

export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsInfo}>
        <p className={classNames('subtitle', styles.reviewsSubtitle)}>
          TESTIMONIALS
        </p>
        <h2 className={classNames('title', styles.reviewsTitle)}>
          What people say about our blog
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
