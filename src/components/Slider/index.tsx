'use client';

import { useState } from 'react';
import { UserPreview } from '@components/UserPreview';
import { ArrowNext, ArrowPrev } from '@root/constants';
import classNames from 'classnames';

import { ISliderProps } from './types';

import styles from './styles.module.scss';

export const Slider = (props: ISliderProps) => {
  const { slides } = props;

  const [activeSlide, setActiveSlide] = useState(1);

  const handleClickNext = () => {
    if (activeSlide === slides.length) {
      setActiveSlide(1);
    } else {
      setActiveSlide((prev) => (prev += 1));
    }
  };
  const handleClickPrev = () => {
    if (activeSlide === 1) {
      setActiveSlide(slides.length);
    } else {
      setActiveSlide((prev) => (prev -= 1));
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        {slides.map(
          ({ id, imageUrl, name, city, text }) =>
            activeSlide === id && (
              <div
                key={id}
                className={classNames(styles.slideItem, {
                  [styles.active]: activeSlide === id,
                })}
              >
                <h4 className={styles.slideText}>{text}</h4>
                <UserPreview imageUrl={imageUrl.src} name={name} city={city} />
              </div>
            ),
        )}
      </div>
      <div className={styles.navigation}>
        <button
          onClick={handleClickPrev}
          className={styles.prevButton}
          data-testid="slider-prev-button"
        >
          <ArrowPrev />
        </button>
        <button
          onClick={handleClickNext}
          className={styles.nextButton}
          data-testid="slider-next-button"
        >
          <ArrowNext />
        </button>
      </div>
    </div>
  );
};
