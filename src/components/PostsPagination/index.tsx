'use client';

import { useState } from 'react';

import { TaggedPost } from '@components/TaggedPost';

import styles from './styles.module.scss';
import { IPostsPaginationProps } from './types';

export const PostsPagination = (props: IPostsPaginationProps) => {
  const { posts } = props;

  const [currentSlide, setCurrentSlide] = useState(1);

  const itemsPerPage = 5;
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

  console.log(currentSlidePosts);

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
          &lt; Prev
        </button>
        <button onClick={onNextButtonClick} className={styles.nextButton}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};
