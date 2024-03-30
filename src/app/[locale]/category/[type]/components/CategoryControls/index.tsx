import { categoryItems, routes } from '@root/constants';
import classNames from 'classnames';
import Link from 'next/link';

import styles from './styles.module.scss';
import { ICategoryControls } from './types';

export const CategoryControls = (props: ICategoryControls) => {
  const { targetCategory } = props;

  return (
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
  );
};
