import React from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutBlock}>
        <p className="subtitle">ABOUT US</p>
        <h2 className={styles.aboutTitle}>
          We are a community of content writers who share their learnings
        </h2>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link className={styles.aboutLink} href="#">
          Read More &gt;
        </Link>
      </div>
      <div className={styles.aboutBlock}>
        <p className="subtitle">OUR MISION</p>
        <h3 className={styles.missionTitle}>
          Creating valuable content for creatives all around the world
        </h3>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};
