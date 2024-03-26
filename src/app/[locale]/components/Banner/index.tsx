import React from 'react';

import { Button } from '@components/Button';

import styles from './styles.module.scss';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <p className={styles.bannerMeta}>
          POSTED ON<span> STARTUP</span>
        </p>
        <h1 className={styles.bannerTitle}>
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className={styles.bannerAuthor}>
          By <span>James West</span> | May 23, 2022
        </p>
        <p className={styles.bannerText}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Button text="Read More >" />
      </div>
    </section>
  );
};
