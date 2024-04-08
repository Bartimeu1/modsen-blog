import Image from 'next/image';

import { logosItems } from './config';

import styles from './styles.module.scss';

export const Logos = () => {
  return (
    <div className={styles.logos}>
      <div className={styles.topper}>
        <p className="infoText">We are</p>
        <h4>Featured in</h4>
      </div>
      <div className={styles.logosList}>
        {logosItems.map(({ id, image }) => (
          <Image
            key={id}
            src={image}
            alt="other-logo"
            width={0}
            height={0}
            sizes="100%"
            priority
          />
        ))}
      </div>
    </div>
  );
};
