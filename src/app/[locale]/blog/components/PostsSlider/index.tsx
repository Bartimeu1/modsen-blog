import { PostsPagination } from '@components/Posts';
import { getAllPosts } from '@root/services/api';

import styles from './styles.module.scss';

export const PostsSlider = async () => {
  const postsData = await getAllPosts();

  return (
    <section className={styles.posts}>
      <h1 className={styles.postsTitle}>All posts</h1>
      <PostsPagination posts={postsData} />
    </section>
  );
};
