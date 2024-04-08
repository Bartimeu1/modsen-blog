'use client';

import { ChangeEvent, useState } from 'react';
import { NavMenu } from '@components/NavMenu';
import { Social } from '@components/Social';
import { Toast } from '@components/Toast';
import { routes } from '@root/constants';
import { ToastTypesEnum } from '@root/types/enums';
import { sendSubscribeMail } from '@services/sendMail';
import classNames from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ValidationError } from 'yup';

import { inputValidationSchema, mockedNetworkLinks } from './config';
import { IToastControls } from './types';

import styles from './styles.module.scss';

export const Footer = () => {
  const [subscribeInputValue, setSubscribeInputValue] = useState('');
  const [subscribeInputValidation, setSubscribeInputValidation] = useState('');
  const [toastControls, setToastControls] = useState<IToastControls>({
    isVisible: false,
    type: ToastTypesEnum.success,
  });

  const t = useTranslations('Footer');

  const onSubscribeInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscribeInputValue(e.target.value);
  };

  const handleValidationErrors = (error: ValidationError) => {
    const validationText = error.inner[0].message;

    setSubscribeInputValidation(validationText);
  };

  const onSubscribeButtonClick = () => {
    inputValidationSchema
      .validate({ email: subscribeInputValue }, { abortEarly: false })
      .then(() => {
        sendSubscribeMail({ email: subscribeInputValue });
        setToastControls({ isVisible: true, type: ToastTypesEnum.success });
        setSubscribeInputValidation('');
        setSubscribeInputValue('');
      })
      .catch((error: ValidationError) => {
        handleValidationErrors(error);
        setToastControls({ isVisible: true, type: ToastTypesEnum.error });
      });
  };

  const closeToast = () => {
    setToastControls((prevState) => ({ ...prevState, isVisible: false }));
  };

  return (
    <>
      <footer className={styles.footer} data-testid="footer">
        <div className={classNames('container', styles.footerContainer)}>
          <div className={styles.footerTopper}>
            <Link href={routes.home} className={styles.topperLink}>
              Modsen Client Blog
            </Link>
            <NavMenu />
          </div>
          <div className={styles.subscribe}>
            <h2 className={styles.subscribeTitle}>{t('title')}</h2>
            <div className={styles.subscribeControls}>
              <div className={styles.subscribeField}>
                <input
                  className={styles.subscribeInput}
                  type="text"
                  placeholder={t('input')}
                  value={subscribeInputValue}
                  onChange={onSubscribeInputValueChange}
                />
                <p className={styles.errorText}>{subscribeInputValidation}</p>
              </div>
              <button
                type="button"
                className={styles.subscribeButton}
                onClick={onSubscribeButtonClick}
              >
                {t('button')}
              </button>
            </div>
          </div>
          <div className={styles.footerBottomer}>
            <div>
              <p className={styles.bottomerText}>Finstreet 118 2561 Fintown</p>
              <p className={styles.bottomerText}>
                Hello@finsweet.com 020 7993 2905
              </p>
            </div>
            <Social links={mockedNetworkLinks} />
          </div>
        </div>
      </footer>
      {toastControls.isVisible && (
        <Toast type={toastControls.type} closeToast={closeToast} />
      )}
    </>
  );
};
