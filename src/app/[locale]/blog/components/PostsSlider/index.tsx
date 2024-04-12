import { getTranslations } from 'next-intl/server';

import { PostsPagination } from '@components/Posts';

import { getAllPosts } from '@root/services/api';

import styles from './styles.module.scss';

export const PostsSlider = async () => {
  const postsData = await getAllPosts();

  const t = await getTranslations('Blog');

  return (
    <section className={styles.posts}>
      <h1 className={styles.postsTitle}>{t('postsTitle')}</h1>
      <PostsPagination posts={postsData} />
    </section>
  );
};
