import { categoryItems } from './config';
import styles from './styles.module.scss';

export const CategoryList = () => {
  return (
    <section className={styles.listWrapper}>
      <h2 className="title">Choose A Catagory</h2>
      <div className={styles.categoryList}>
        {categoryItems.map(({ id, title, text, icon }) => (
          <article key={id} className={styles.categoryItem}>
            <div className={styles.IconWrapper}>{icon}</div>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <p className="infoText">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
