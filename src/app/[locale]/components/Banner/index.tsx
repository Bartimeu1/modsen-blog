import React from 'react';
import { Button } from '@components/Button';
import { routes } from '@root/constants';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { IBannerProps } from './types';

import styles from './styles.module.scss';

export const Banner = ({ post }: IBannerProps) => {
  const { id, title, author, createdDate, text } = post;

  const t = useTranslations('Header');

  return (
    <section className={styles.banner}>
      <div className={classNames('container', styles.bannerContainer)}>
        <p className={styles.bannerMeta}>
          {t('postedOn').toUpperCase()}
          <span> STARTUP</span>
        </p>
        <h1 className={styles.bannerTitle}>{title}</h1>
        <p className={styles.bannerAuthor}>
          By <span>{author.name}</span> | {createdDate}
        </p>
        <p className={styles.bannerText}>{text}</p>
        <Button text={t('readMore')} href={`${routes.post}/${id}`} />
      </div>
    </section>
  );
};
