'use client';

import { useState } from 'react';

import { NavMenu } from '@components/NavMenu';
import { VideoModal } from '@components/VideoModal';
import { routes } from '@root/constants';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onVideoButtonClick = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href={routes.home} className={styles.headerTitle}>
          Modsen Client Blog
        </Link>
        <div className={styles.headerControls}>
          <NavMenu />
          <button
            className={styles.videoButton}
            onClick={onVideoButtonClick}
            type="button"
          >
            Video about us
          </button>
        </div>
      </div>
      {isModalVisible && <VideoModal closeModal={closeModal} />}
    </header>
  );
};
