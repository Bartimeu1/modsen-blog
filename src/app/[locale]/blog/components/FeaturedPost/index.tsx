import featuredPostImage from '@assets/images/blogFeatured.jpg';
import { Button } from '@components/Button';
import classNames from 'classnames';
import Image from 'next/image';

import styles from './styles.module.scss';

export const FeaturedPost = () => {
  return (
    <section className={styles.featuredPost}>
      <div className={classNames('container', styles.postContainer)}>
        <div className={styles.postContent}>
          <p className={styles.postSubtitle}>FEATURED POST</p>
          <h2 className={styles.postTitle}>
            Step-by-step guide to choosing great font pairs
          </h2>
          <p className={styles.postInfo}>By John Doe | May 23, 2022 </p>
          <p className={classNames('infoText', styles.postText)}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Button text="Read More >" />
        </div>
        <Image alt="post-image" src={featuredPostImage} />
      </div>
    </section>
  );
};
