'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { TaggedPost } from '@components/Posts';

import { itemsPerPage } from './config';
import { IPostsPaginationProps } from './types';

import styles from './styles.module.scss';

export const PostsPagination = (props: IPostsPaginationProps) => {
  const { posts } = props;

  const t = useTranslations('Blog');

  const [currentSlide, setCurrentSlide] = useState(1);

  const startIndex = (currentSlide - 1) * itemsPerPage;
  const endIndex = currentSlide * itemsPerPage;

  const currentSlidePosts = posts.slice(startIndex, endIndex);

  const onPrevButtonClick = () => {
    if (currentSlide > 1) {
      setCurrentSlide((prevState) => prevState - 1);
    }
  };

  const onNextButtonClick = () => {
    if (endIndex < posts.length) {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      {currentSlidePosts.map(({ id, title, text, image, category }) => (
        <TaggedPost
          id={id}
          key={id}
          title={title}
          text={text}
          image={image}
          category={category}
        />
      ))}
      <div className={styles.controls}>
        <button onClick={onPrevButtonClick} className={styles.prevButton}>
          {t('prevButton')}
        </button>
        <button onClick={onNextButtonClick} className={styles.nextButton}>
          {t('nextButton')}
        </button>
      </div>
    </div>
  );
};
