'use client';

import { useEffect, useState } from 'react';

import { TaggedPost } from '@components/TaggedPost';
import { categoryItems, routes, tagItems } from '@root/constants';
import { IPostData } from '@root/types/api';
import { getPostsByCategory } from '@services/api';
import classNames from 'classnames';
import Link from 'next/link';

import { TagSearch } from './components';
import styles from './styles.module.scss';
import { ICategoryPageProps } from './type';

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;

  const targetCategory = params.type;

  const [currentPosts, setCurrentPosts] = useState<IPostData[]>();
  const [targetTags, setTargetTags] = useState<string[]>([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    getPostsByCategory(targetCategory, targetTags).then((data) =>
      setCurrentPosts(data),
    );
  }, [targetTags, targetCategory]);

  const onTagButtonClick = (value: string) => () => {
    setTargetTags((prevState) => {
      const isTagIncluded = prevState.includes(value);
      const inputValue = searchInputValue.toLowerCase();

      const updatedTags = isTagIncluded
        ? prevState.filter((tag) => tag !== value)
        : [...prevState, value];

      if (isTagIncluded && inputValue === value) {
        setSearchInputValue('');
      }

      return updatedTags;
    });
  };

  const onSearchInputChange = (value: string) => {
    setSearchInputValue(value);
  };

  const onSearchButtonClick = () => {
    const inputValue = searchInputValue.toLowerCase();

    setTargetTags([inputValue]);
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
            <TagSearch
              tags={tagItems}
              value={searchInputValue}
              onChange={onSearchInputChange}
              onSearch={onSearchButtonClick}
            />
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
                      [styles.active]: targetTags.includes(value),
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
