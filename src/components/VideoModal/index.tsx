import { useRef } from 'react';
import { useLockBodyScroll, useOnClickOutside } from '@root/hooks';
import { useTranslations } from 'next-intl';
import { createPortal } from 'react-dom';

import { IVideoModalProps } from './types';

import styles from './styles.module.scss';

export const VideoModal = (props: IVideoModalProps) => {
  const { closeModal } = props;

  const t = useTranslations('Header');

  const contentRef = useRef(null);

  useLockBodyScroll();
  useOnClickOutside(contentRef, closeModal);

  return createPortal(
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent} ref={contentRef}>
        <h2>{t('modalTitle')}</h2>
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
