import classNames from 'classnames';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { TaggedPost } from '@components/Posts';
import { Social } from '@components/Social';

import { getAuthorById, getPostsByAuthorId } from '@services/api';

import { mockedContentText } from '@root/constants';

import { IAuthorPageProps } from './types';

import styles from './styles.module.scss';

const AuthorPage = async (props: IAuthorPageProps) => {
  const { params } = props;

  const t = await getTranslations('Author');

  const authorId = params.id;

  const { name, avatar, links } = await getAuthorById(authorId);
  const postsData = await getPostsByAuthorId(authorId);

  return (
    <main>
      <section className={styles.banner}>
        <div className={classNames('container', styles.bannerContainer)}>
          <Image
            src={avatar}
            alt="author-avatar"
            width={0}
            height={0}
            sizes="100%"
            priority
          />
          <div>
            <h2>{`Hey there, I’m ${name} and welcome to my Blog`}</h2>
            <p className="infoText">{mockedContentText}</p>
            <Social links={links} />
          </div>
        </div>
      </section>
      <section className={styles.posts}>
        <h2 className="title">{t('postsTitle')}</h2>
        {postsData.map(({ id, title, text, image, category }) => (
          <TaggedPost
            key={id}
            id={id}
            title={title}
            text={text}
            image={image}
            category={category}
          />
        ))}
      </section>
    </main>
  );
};

export default AuthorPage;
