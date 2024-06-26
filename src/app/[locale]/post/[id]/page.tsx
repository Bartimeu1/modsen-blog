import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { JoinUs } from '@components/JoinUs';
import { Post } from '@components/Posts';
import { UserPreview } from '@components/UserPreview';

import { getLimitedPosts, getPostById } from '@services/api';

import { mockedContentText, mockedContentTitle } from '@root/constants';
import { PostTypesEnum } from '@root/types/enums';

import { categoryImages } from './config';
import { IPostPageProps } from './types';

import styles from './styles.module.scss';

const PostPage = async (props: IPostPageProps) => {
  const { params } = props;

  const t = await getTranslations('Post');

  const postId = Number(params.id);
  const postData = await getPostById(postId);
  const recommendedPosts = await getLimitedPosts(3, 1);

  const { title, category, image, text, author } = postData;
  const { avatar, name, city } = author;

  return (
    <main className={styles.postPage}>
      <div className="container">
        <section className={styles.topper}>
          <UserPreview imageUrl={avatar} name={name} city={city} />
          <h1 className={styles.topperTitle}>{title}</h1>
          <div className={styles.category}>
            {categoryImages[category]}
            <p className={styles.categoryName}>{category}</p>
          </div>
        </section>
        <section className={styles.content}>
          <Image
            src={image}
            alt="post-image"
            width={0}
            height={0}
            sizes="100%"
            priority
          />
          <div className={styles.contentBlock}>
            <p className="infoText">{text}</p>
            <h3>{mockedContentTitle}</h3>
            <p className="infoText">{mockedContentText}</p>
          </div>
          <div className={styles.contentBlock}>
            <h3>{mockedContentTitle}</h3>
            <p className="infoText">{mockedContentText}</p>
            <ul className={styles.contentList}>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Non blandit massa enim nec scelerisque</li>
              <li>Neque egestas congue quisque egestas</li>
            </ul>
            <p className="infoText">{mockedContentText}</p>
          </div>
          <div className={styles.contentBlock}>
            <h3>{mockedContentTitle}</h3>
            <p className="infoText">{mockedContentText}</p>
          </div>
        </section>
        <section className={styles.recommended}>
          <h2 className="title">{t('recommendedTitle')}</h2>
          <div className={styles.postsList}>
            {recommendedPosts.map((post) => (
              <Post key={post.id} {...post} type={PostTypesEnum.medium} />
            ))}
          </div>
        </section>
        <JoinUs />
      </div>
    </main>
  );
};

export default PostPage;
