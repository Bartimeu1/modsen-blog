import { categoryItems, routes } from '@root/constants';
import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';
import { ICategoryControls } from './types';

export const CategoryControls = (props: ICategoryControls) => {
  const { targetCategory } = props;

  const listLocalization = useTranslations('CategoryList');
  const categoryLocalization = useTranslations('Category');

  return (
    <div className={styles.categoryControls}>
      <h2>{categoryLocalization('categoryTitle')}</h2>
      {categoryItems.map(({ id, value, icon }) => (
        <Link
          key={id}
          className={classNames(styles.categoryItem, {
            [styles.active]: value === targetCategory,
          })}
          href={`${routes.category}/${value}`}
        >
          <div className={styles.iconWrapper}>{icon}</div>
          <p>{listLocalization(value)}</p>
        </Link>
      ))}
    </div>
  );
};
