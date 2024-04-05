import featuredPostImage from '@assets/images/blogFeatured.jpg';
import { Button } from '@components/Button';
import { routes } from '@root/constants';
import classNames from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const FeaturedPost = () => {
  const t = useTranslations('Blog');

  return (
    <section className={styles.featuredPost}>
      <div className={classNames('container', styles.postContainer)}>
        <div className={styles.postContent}>
          <p className={styles.postSubtitle}>
            {t('featuredTitle').toUpperCase()}
          </p>
          <h2 className={styles.postTitle}>
            Step-by-step guide to choosing great font pairs
          </h2>
          <p className={styles.postInfo}>By John Doe | May 23, 2022 </p>
          <p className={classNames('infoText', styles.postText)}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Button text={t('moreButton')} href={`${routes.post}/${1}`} />
        </div>
        <Image alt="post-image" src={featuredPostImage} />
      </div>
    </section>
  );
};
