import React from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import styles from './styles.module.scss';
import { IPostProps } from './types';

export const Post = (props: IPostProps) => {
  const { type, title, author, date, text, image } = props;

  return (
    <article className={classNames(styles.post, styles[`post--${type}`])}>
      {image && (
        <Image
          className={styles.postImage}
          src={image}
          alt="post-image"
          width={0}
          height={0}
          sizes="100%"
          priority
        />
      )}
      <p className={styles.postInfo}>
        By {author} | {date}
      </p>
      <h4 className={styles.postTitle}>{title}</h4>
      {text && <p className="infoText">{text}</p>}
    </article>
  );
};
