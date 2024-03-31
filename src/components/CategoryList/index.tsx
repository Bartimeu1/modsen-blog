import { categoryItems } from '@root/constants';
import { routes } from '@root/constants';
import Link from 'next/link';

import styles from './styles.module.scss';

export const CategoryList = () => {
  return (
    <section className={styles.listWrapper}>
      <h2 className="title">Choose A Catagory</h2>
      <div className={styles.categoryList}>
        {categoryItems.map(({ id, title, text, icon, value }) => (
          <Link
            href={`${routes.category}/${value}`}
            key={id}
            className={styles.categoryItem}
          >
            <div className={styles.IconWrapper}>{icon}</div>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <p className="infoText">{text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
