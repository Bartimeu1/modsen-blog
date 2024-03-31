import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { useLockBodyScroll, useOnClickOutside } from '@root/hooks';

import styles from './styles.module.scss';
import { IVideoModalProps } from './types';

export const VideoModal = (props: IVideoModalProps) => {
  const { closeModal } = props;
  const contentRef = useRef(null);

  useLockBodyScroll();
  useOnClickOutside(contentRef, closeModal);

  return createPortal(
    <div className={styles.test}>
      <div className={styles.modalContent} ref={contentRef}>
        <h2>About us</h2>
        <iframe
          width="560"
          height="315"
          allow="autoplay; encrypted-media"
          allowFullScreen
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?si=v2GC-SPI9MNfMBOG?&autoplay=1`}
        ></iframe>
      </div>
    </div>,
    document.body,
  );
};
