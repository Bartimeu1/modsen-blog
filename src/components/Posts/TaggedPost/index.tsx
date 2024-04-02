import { routes } from '@root/constants';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';
import { ITaggedPostProps } from './types';

export const TaggedPost = (props: ITaggedPostProps) => {
  const { id, title, text, image, category } = props;

  const t = useTranslations('CategoryList');

  return (
    <Link href={`${routes.post}/${id}`} className={styles.tagPost}>
      <Image
        src={image}
        alt="tag-post-image"
        width={0}
        height={0}
        sizes="100%"
        priority
      />
      <div className={styles.postContent}>
        <p className={classNames('subtitle', styles.postTag)}>
          {t(category).toUpperCase()}
        </p>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className="infoText">{text}</p>
      </div>
    </Link>
  );
};
