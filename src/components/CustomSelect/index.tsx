'use client';

import { useRef, useState } from 'react';
import { ChevronIcon } from '@root/constants';
import { useOnClickOutside } from '@root/hooks';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { ICustomSelectProps } from './types';

import styles from './styles.module.scss';
export const CustomSelect = (props: ICustomSelectProps) => {
  const { options, onSelect, targetOption } = props;

  const t = useTranslations('Select');

  const selectRef = useRef(null);

  const [isSelectActive, setIsSelectActive] = useState(false);

  const onLabelClick = () => {
    setIsSelectActive((prevState) => !prevState);
  };

  const closeSelect = () => {
    setIsSelectActive(false);
  };

  const onSelectOptionClick = (value: string) => () => {
    onSelect(value);
    closeSelect();
  };

  useOnClickOutside(selectRef, closeSelect);

  return (
    <div className={styles.select} ref={selectRef}>
      <div
        data-testid="select-label"
        className={classNames(styles.label, {
          [styles.active]: isSelectActive,
        })}
        onClick={onLabelClick}
      >
        {targetOption ? (
          <p className={styles.labelValue}>{targetOption}</p>
        ) : (
          <p className={styles.placeholder}>{t('placeholder')}</p>
        )}
        <ChevronIcon />
      </div>
      {isSelectActive && (
        <div className={styles.options} data-testid="select-dropdown">
          {options.map(({ id, value }) => (
            <button
              data-testid="select-dropdown-option"
              key={id}
              onClick={onSelectOptionClick(value)}
              className={styles.option}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
