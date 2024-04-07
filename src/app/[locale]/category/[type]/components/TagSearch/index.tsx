import { ChangeEvent, useState } from 'react';
import { useTranslations } from 'next-intl';

import { ITagSearchProps } from './types';

import styles from './styles.module.scss';

export const TagSearch = (props: ITagSearchProps) => {
  const { tags, onSearch, onChange, value } = props;

  const t = useTranslations('Category');

  const [isInputFocused, setIsInputFocused] = useState(false);

  const filteredTags = tags.filter((tag) =>
    tag.value.startsWith(value.toLowerCase()),
  );

  const onElasticButtonClick = (value: string) => () => {
    onChange(value);
  };

  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
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
        value={value}
        onChange={onInputValueChange}
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
      <button type="button" className={styles.searchButton} onClick={onSearch}>
        {t('searchButton')}
      </button>
    </div>
  );
};
