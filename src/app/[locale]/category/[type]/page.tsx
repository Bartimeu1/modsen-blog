'use client';

import { useState } from 'react';

import { TaggedPost } from '@components/TaggedPost';
import { categoryItems, routes, tagItems } from '@root/constants';
import { IPostData } from '@root/types/api';
import { getPostsByCategory } from '@services/api';
import classNames from 'classnames';
import Link from 'next/link';

import styles from './styles.module.scss';
import { ICategoryPageProps } from './type';

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;

  const [currentPosts, setCurrentPosts] = useState<IPostData[]>();
  const [currentTags, setCurrentTags] = useState<string[]>([]);

  const targetCategory = params.type;

  getPostsByCategory(targetCategory, currentTags).then((data) =>
    setCurrentPosts(data),
  );

  const onTagButtonClick = (value: string) => () => {
    setCurrentTags((prevState) =>
      prevState.includes(value)
        ? prevState.filter((tag) => tag !== value)
        : [...prevState, value],
    );
  };

  return (
    <main>
      <section className={styles.banner}>
        <h1>{targetCategory}</h1>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className={styles.bannerLinks}>
          <Link href={routes.blog}>BLOG &gt;</Link>
          <Link href={`${routes.category}/${targetCategory}`}>
            {targetCategory.toUpperCase()}
          </Link>
        </div>
      </section>
      <div className="container">
        <section className={styles.postsFilter}>
          <div className={styles.posts}>
            {currentPosts &&
              currentPosts.map(({ id, title, text, image, category }) => (
                <TaggedPost
                  key={id}
                  id={id}
                  category={category}
                  title={title}
                  text={text}
                  image={image}
                />
              ))}
          </div>
          <aside className={styles.filterAside}>
            <div className={styles.categoryControls}>
              <h2>Categories</h2>
              {categoryItems.map(({ id, value, title, icon }) => (
                <Link
                  key={id}
                  className={classNames(styles.categoryItem, {
                    [styles.active]: value === targetCategory,
                  })}
                  href={`${routes.category}/${value}`}
                >
                  <div className={styles.iconWrapper}>{icon}</div>
                  <p>{title}</p>
                </Link>
              ))}
            </div>
            <div className={styles.tagsControls}>
              <h2>All Tags</h2>
              <div className={styles.tagsList}>
                {tagItems.map(({ id, value, title }) => (
                  <button
                    key={id}
                    onClick={onTagButtonClick(value)}
                    className={classNames(styles.tagButton, {
                      [styles.active]: currentTags.includes(value),
                    })}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default CategoryPage;
