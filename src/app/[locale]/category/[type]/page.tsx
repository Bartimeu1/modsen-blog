'use client';

import { routes } from '@root/constants';
import Link from 'next/link';

import styles from './styles.module.scss';
import { ICategoryPageProps } from './type';

const CategoryPage = (props: ICategoryPageProps) => {
  const { params } = props;

  const targetCategory = params.type;

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
      <div className="container">content</div>
    </main>
  );
};

export default CategoryPage;
