'use client';

import { localizationItems } from '@root/constants';
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

  const { ru, en } = localizationItems;

  const onChangeLocale = () => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known params
      // are used in combination with a given pathname. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      {
        locale: locale === ru ? en : ru,
      },
    );
  };

  return (
    <div
      className={styles.wrapper}
      onClick={onChangeLocale}
      data-testid="locale-button"
    >
      <input
        type="checkbox"
        className={classNames(styles.toggleButton, {
          [styles.active]: locale === ru,
        })}
      />
    </div>
  );
};
