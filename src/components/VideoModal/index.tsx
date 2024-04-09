import { useRef } from 'react';
import { YOUTUBE_VIDEO_URL } from '@root/config';
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
          src={YOUTUBE_VIDEO_URL}
        ></iframe>
      </div>
    </div>,
    document.body,
  );
};
