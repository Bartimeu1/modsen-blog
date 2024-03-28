import classNames from 'classnames';
import Image from 'next/image';

import styles from './styles.module.scss';
import { ITaggedPostProps } from './types';

export const TaggedPost = (props: ITaggedPostProps) => {
  const { title, text, image, tag } = props;

  return (
    <article className={styles.tagPost}>
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
          {tag.toUpperCase()}
        </p>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className="infoText">{text}</p>
      </div>
    </article>
  );
};
