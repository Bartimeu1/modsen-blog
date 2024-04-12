import React from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@components/Button';
import { Post } from '@components/Posts';

import { routes } from '@root/constants';
import { PostTypesEnum } from '@root/types/enums';

import { IPostsProps } from './types';

import styles from './styles.module.scss';

export const Posts = (props: IPostsProps) => {
  const { featuredPost, posts } = props;

  const t = useTranslations('Main.Posts');

  const { author, createdDate, title, image, text, id } = featuredPost;
  return (
    <div className={styles.posts}>
      <div className={styles.featuredWrapper}>
        <h3 className="title">{t('featuredTitle')}</h3>
        <div className={styles.featuredPost}>
          <Post
            id={id}
            type={PostTypesEnum.large}
            image={image}
            author={author}
            createdDate={createdDate}
            title={title}
            text={text}
          />
          <Button text={t('readMore')} href={`${routes.post}/${id}`} />
        </div>
      </div>
      <div className={styles.postsСatalog}>
        <h3 className="title">{t('allPostsTitle')}</h3>
        <div className={styles.postsList}>
          {posts.map(({ id, author, createdDate, title }) => (
            <Post
              key={id}
              id={id}
              type={PostTypesEnum.small}
              title={title}
              author={author}
              createdDate={createdDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
