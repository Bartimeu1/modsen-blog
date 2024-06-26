import { memo } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { useTimeout } from '@root/hooks';

import { toastTextContent } from './config';
import { IToastProps } from './types';

import styles from './styles.module.scss';

export const Toast = memo(function Toast(props: IToastProps) {
  const { type, closeToast } = props;

  useTimeout(() => closeToast(), 8000);

  return createPortal(
    <aside className={classNames(styles.toast, styles[type])}>
      <p className={styles.toastText}>{toastTextContent[type]}</p>
    </aside>,
    document.body,
  );
});
