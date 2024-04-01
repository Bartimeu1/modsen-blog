'use client';

import { useState } from 'react';

import { NavMenu } from '@components/NavMenu';
import { VideoModal } from '@components/VideoModal';
import { routes } from '@root/constants';
import classNames from 'classnames';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onBurgerMenuClick = () => {
    setIsBurgerActive((prevState) => !prevState);
  };

  const closeBurger = () => {
    setIsBurgerActive(false);
  };

  const onVideoButtonClick = () => {
    setIsModalVisible((prevState) => !prevState);
    closeBurger();
  };

  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.headerContainer)}>
        <Link href={routes.home} className={styles.headerTitle}>
          Modsen Client Blog
        </Link>
        <div
          className={classNames(styles.headerControls, {
            [styles.visible]: isBurgerActive,
          })}>
          <NavMenu onLink={closeBurger} />
          <button
            className={styles.videoButton}
            onClick={onVideoButtonClick}
            type="button">
            Video about us
          </button>
        </div>
        <button
          type="button"
          onClick={onBurgerMenuClick}
          className={classNames(styles.burgerMenu, {
            [styles.active]: isBurgerActive,
          })}>
          <span className={styles.burgerRow} />
        </button>
      </div>
      {isModalVisible && <VideoModal closeModal={closeModal} />}
    </header>
  );
};
