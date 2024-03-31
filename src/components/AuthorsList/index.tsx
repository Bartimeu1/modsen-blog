import { Social } from '@components/Social';
import { routes } from '@root/constants';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';
import { IAuthorsListProps } from './types';

export const AuthorsList = async (props: IAuthorsListProps) => {
  const { authors } = props;

  return (
    <section className={styles.authors}>
      <h2 className="title">List of Authors</h2>
      <div className={styles.authorsList}>
        {authors.map(({ id, name, description, avatar, links }) => (
          <article key={id} className={styles.authorItem}>
            <Link href={`${routes.author}/${id}`}>
              <Image
                src={avatar}
                alt="author-avatar"
                height={0}
                width={0}
                sizes="100%"
                priority
              />
              <h4>{name}</h4>
              <p>{description}</p>
            </Link>
            <Social links={links} />
          </article>
        ))}
      </div>
    </section>
  );
};
