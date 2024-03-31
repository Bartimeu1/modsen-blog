import React from 'react';

import { Button } from '@components/Button';
import { Post } from '@components/Post';
import { routes } from '@root/constants';
import { PostTypesEnum } from '@root/types/enums';

import styles from './styles.module.scss';
import { IPostsProps } from './types';

export const Posts = (props: IPostsProps) => {
  const { featuredPost, posts } = props;

  const { author, createdDate, title, image, text, id } = featuredPost;
  return (
    <section className={styles.posts}>
      <div className={styles.featuredWrapper}>
        <h3 className="title">Featured Post</h3>
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
          <Button text="Read More >" href={`${routes.post}/${id}`} />
        </div>
      </div>
      <div className={styles.postsСatalog}>
        <h3 className="title">All Posts</h3>
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
    </section>
  );
};
