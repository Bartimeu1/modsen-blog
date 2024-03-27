import Image from 'next/image';

import styles from './styles.module.scss';
import { IUserPreviewProps } from './types';

export const UserPreview = (props: IUserPreviewProps) => {
  const { name, city, imageUrl } = props;

  return (
    <div className={styles.userPreview}>
      <Image src={imageUrl} alt="user-avatar" height={48} width={48} />
      <div className={styles.userInfo}>
        <h4>{name}</h4>
        <p>{city}</p>
      </div>
    </div>
  );
};
