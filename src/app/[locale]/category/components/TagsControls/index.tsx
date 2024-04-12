'use client';

import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { tagItems } from '@root/constants';

import styles from './styles.module.scss';

export const TagsControls = () => {
  const t = useTranslations('Category');

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectedTags = searchParams.getAll('tags');

  const onTagButtonClick = (value: string) => () => {
    const params = new URLSearchParams(searchParams);

    if (params.has('tags', value)) {
      params.delete('tags', value);
    } else {
      params.append('tags', value);
    }

    const newParamsString = params.toString().toLowerCase();

    router.push(`${pathname}?${newParamsString}`, { scroll: false });
  };

  return (
    <div className={styles.tagsControls} data-testid="tags-controls">
      <h2>{t('tagsTitle')}</h2>
      <div className={styles.tagsList}>
        {tagItems.map(({ id, value, title }) => (
          <button
            key={id}
            onClick={onTagButtonClick(value)}
            className={classNames(styles.tagButton, {
              [styles.active]: selectedTags && selectedTags.includes(value),
            })}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};
