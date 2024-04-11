import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { TaggedPost } from '@components/Posts';

import { getPostsByCategory } from '@services/api';

import { routes, tagItems } from '@root/constants';

import { CategoryControls, TagsControls, TagSearch } from './components';
import { ICategoryPageProps } from './types';

import styles from './styles.module.scss';

const CategoryPage = async (props: ICategoryPageProps) => {
  const { searchParams } = props;

  const { category: targetCategory, tags } = searchParams;
  const tagsArray = Array.isArray(tags) ? tags : [tags];

  const postsData = await getPostsByCategory(targetCategory, tagsArray);

  const listLocalization = await getTranslations('CategoryList');
  const categoryLocalization = await getTranslations('Category');

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
            {postsData && postsData.length ? (
              postsData.map(({ id, title, text, image, category }) => (
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
            <TagSearch tags={tagItems} />
            <CategoryControls targetCategory={targetCategory} />
            <TagsControls />
          </aside>
        </section>
      </div>
    </main>
  );
};

export default CategoryPage;
