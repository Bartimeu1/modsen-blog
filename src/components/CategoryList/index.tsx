import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { categoryItems, routes } from '@root/constants';

import styles from './styles.module.scss';

export const CategoryList = () => {
  const t = useTranslations('CategoryList');

  return (
    <section className={styles.listWrapper}>
      <h2 className="title">{t('title')}</h2>
      <div className={styles.categoryList}>
        {categoryItems.map(({ id, text, icon, value }) => (
          <Link
            href={`${routes.category}?category=${value}`}
            key={id}
            className={styles.categoryItem}
          >
            <div className={styles.IconWrapper}>{icon}</div>
            <h3 className={styles.categoryTitle}>{t(value)}</h3>
            <p className="infoText">{text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
