import { ChangeEvent, useState } from 'react';

import styles from './styles.module.scss';
import { ITagSearchProps } from './types';

export const TagSearch = (props: ITagSearchProps) => {
  const { tags, onSearch, onChange, value } = props;

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
    <div className={styles.tagSearch}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for tag..."
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
        Search
      </button>
    </div>
  );
};
