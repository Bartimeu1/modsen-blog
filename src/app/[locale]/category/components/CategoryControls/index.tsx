import { memo } from 'react';
import { categoryItems, routes } from '@root/constants';
import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ICategoryControls } from './types';

import styles from './styles.module.scss';

export const CategoryControls = memo(function CategoryControls(
  props: ICategoryControls,
) {
  const { targetCategory } = props;

  const listLocalization = useTranslations('CategoryList');
  const categoryLocalization = useTranslations('Category');

  return (
    <div className={styles.categoryControls} data-testid="category-controls">
      <h2>{categoryLocalization('categoryTitle')}</h2>
      {categoryItems.map(({ id, value, icon }) => (
        <Link
          data-testid="category-controls-link"
          key={id}
          className={classNames(styles.categoryItem, {
            [styles.active]: value === targetCategory,
          })}
          href={`${routes.category}?category=${value}`}
        >
          <div className={styles.iconWrapper}>{icon}</div>
          <p>{listLocalization(value)}</p>
        </Link>
      ))}
    </div>
  );
});
