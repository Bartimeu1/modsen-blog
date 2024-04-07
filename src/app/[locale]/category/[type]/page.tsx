'use client';

import { useEffect, useState } from 'react';
import { TaggedPost } from '@components/Posts';
import { routes, tagItems } from '@root/constants';
import { IPostData } from '@root/types/api';
import { getPostsByCategory } from '@services/api';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CategoryControls, TagsControls, TagSearch } from './components';
import { ICategoryPageProps } from './types';

import styles from './styles.module.scss';

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;

  const listLocalization = useTranslations('CategoryList');
  const categoryLocalization = useTranslations('Category');

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
        <h1>{listLocalization(targetCategory)}</h1>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <div className={styles.bannerLinks}>
          <Link href={routes.blog}>
            {categoryLocalization('blogLink').toUpperCase()}
          </Link>
          <Link href={`${routes.category}/${targetCategory}`}>
            {listLocalization(targetCategory).toUpperCase()}
          </Link>
        </div>
      </section>
      <div className="container">
        <section className={styles.postsFilter}>
          <div className={styles.posts}>
            {currentPosts && currentPosts.length ? (
              currentPosts.map(({ id, title, text, image, category }) => (
                <TaggedPost
                  key={id}
                  id={id}
                  category={category}
                  title={title}
                  text={text}
                  image={image}
                />
              ))
            ) : (
              <p className={styles.notFoundText}>
                {categoryLocalization('nothingFound')}
              </p>
            )}
          </div>
          <aside className={styles.filterAside}>
            <TagSearch
              tags={tagItems}
              value={searchInputValue}
              onChange={onSearchInputChange}
              onSearch={onSearchButtonClick}
            />
            <CategoryControls targetCategory={targetCategory} />
            <TagsControls
              onTagButtonClick={onTagButtonClick}
              targetTags={targetTags}
            />
          </aside>
        </section>
      </div>
    </main>
  );
};

export default CategoryPage;
