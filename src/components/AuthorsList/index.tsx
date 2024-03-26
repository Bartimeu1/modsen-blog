import { Social } from '@components/Social';
import Image from 'next/image';

import styles from './styles.module.scss';
import { IAuthorsListProps } from './types';

export const AuthorsList = (props: IAuthorsListProps) => {
  const { authors } = props;

  return (
    <section className={styles.authors}>
      <h2 className="title">List of Authors</h2>
      <div className={styles.authorsList}>
        {authors.map(({ id, name, desc, image, links }) => (
          <article key={id} className={styles.authorItem}>
            <Image src={image} alt="author-avatar" height={128} width={128} />
            <h4>{name}</h4>
            <p>{desc}</p>
            <Social links={links} />
          </article>
        ))}
      </div>
    </section>
  );
};
