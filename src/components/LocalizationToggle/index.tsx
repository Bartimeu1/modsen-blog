'use client';

import { usePathname, useRouter } from '@root/navigation';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';

import styles from './styles.module.scss';
export const LocalizationToggle = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const params = useParams();

  const onChangeLocale = () => {
    router.replace(
      { pathname, params },
      { locale: locale === 'ru' ? 'en' : 'ru' },
    );
  };

  return (
    <div className={styles.wrapper} onClick={onChangeLocale}>
      <input
        type="checkbox"
        className={classNames(styles.toggleButton, {
          [styles.active]: locale === 'ru',
        })}
      />
    </div>
  );
};
