'use client';

import { ChangeEvent, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ITagSearchProps } from './types';

import styles from './styles.module.scss';

export const TagSearch = (props: ITagSearchProps) => {
  const { tags } = props;

  const t = useTranslations('Category');
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const filteredTags = useMemo(
    () =>
      tags.filter((tag) =>
        tag.value.startsWith(searchInputValue.toLowerCase()),
      ),
    [searchInputValue, tags],
  );

  const onSearchInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const onElasticButtonClick = (value: string) => () => {
    setSearchInputValue(value);
  };

  const onSearchButtonClick = () => {
    const params = new URLSearchParams(searchParams);
    params.append('tags', searchInputValue);

    const newParamsString = params.toString().toLowerCase();

    router.push(`${pathName}?${newParamsString}`, {
      scroll: false,
    });
    setSearchInputValue('');
  };

  const onInputBlur = () => {
    setIsInputFocused(false);
  };

  const onInputFocus = () => {
    setIsInputFocused(true);
  };

  return (
    <div className={styles.tagSearch} data-testid="search-controls">
      <input
        type="text"
        className={styles.searchInput}
        placeholder={t('input')}
        value={searchInputValue}
        onChange={onSearchInputValueChange}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
      />
      {isInputFocused && (
        <div className={styles.elasticSearch}>
          {filteredTags.map(({ id, title }) => (
            <button
              key={id}
              className={styles.elasticButton}
              onMouseDown={onElasticButtonClick(title)}
            >
              {title}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        className={styles.searchButton}
        onClick={onSearchButtonClick}
      >
        {t('searchButton')}
      </button>
    </div>
  );
};
