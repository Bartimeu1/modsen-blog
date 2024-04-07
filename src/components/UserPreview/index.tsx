import Image from 'next/image';

import { IUserPreviewProps } from './types';

import styles from './styles.module.scss';

export const UserPreview = (props: IUserPreviewProps) => {
  const { name, city, imageUrl } = props;

  return (
    <div className={styles.userPreview}>
      <Image
        src={imageUrl}
        alt="user-avatar"
        height={0}
        width={0}
        sizes="100%"
        priority
      />
      <div className={styles.userInfo}>
        <h4>{name}</h4>
        <p>{city}</p>
      </div>
    </div>
  );
};
