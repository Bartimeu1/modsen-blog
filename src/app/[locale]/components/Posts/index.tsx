import React from 'react';

import { Button } from '@components/Button';
import { Post } from '@components/Post';
import { PostTypesEnum } from '@root/types/enums';

import { featuredPost, postsList } from './config';
import styles from './styles.module.scss';

export const Posts = () => {
  const { author, date, title, image, text } = featuredPost;
  return (
    <section className={styles.posts}>
      <div className={styles.featuredWrapper}>
        <h3 className="title">Featured Post</h3>
        <div className={styles.featuredPost}>
          <Post
            type={PostTypesEnum.large}
            image={image}
            author={author}
            date={date}
            title={title}
            text={text}
          />
          <Button text="Read More >" />
        </div>
      </div>
      <div className={styles.postsСatalog}>
        <h3 className="title">All Posts</h3>
        <div className={styles.postsList}>
          {postsList.map(({ id, author, date, title }) => (
            <Post
              key={id}
              type={PostTypesEnum.small}
              title={title}
              author={author}
              date={date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
