import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@root/constants';

import { IPostProps } from './types';

import styles from './styles.module.scss';

export const Post = (props: IPostProps) => {
  const { id, title, author, type, image, createdDate, text } = props;

  return (
    <Link
      href={`${routes.post}/${id}`}
      className={classNames(styles.post, styles[`post--${type}`])}
    >
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
        By {author.name} | {createdDate}
      </p>
      <h4 className={styles.postTitle}>{title}</h4>
      {text && <p className="infoText">{text}</p>}
    </Link>
  );
};
