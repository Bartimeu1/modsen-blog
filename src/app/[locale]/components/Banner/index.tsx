import React from 'react';

import { Button } from '@components/Button';
import { routes } from '@root/constants';

import styles from './styles.module.scss';
import { IBannerProps } from './types';

export const Banner = ({ post }: IBannerProps) => {
  const { id, title, author, createdDate, text } = post;

  return (
    <section className={styles.banner}>
      <div className="container">
        <p className={styles.bannerMeta}>
          POSTED ON<span> STARTUP</span>
        </p>
        <h1 className={styles.bannerTitle}>{title}</h1>
        <p className={styles.bannerAuthor}>
          By <span>{author.name}</span> | {createdDate}
        </p>
        <p className={styles.bannerText}>{text}</p>
        <Button text="Read More >" href={`${routes.post}/${id}`} />
      </div>
    </section>
  );
};
