'use client';

import { useRef, useState } from 'react';

import { ChevronIcon } from '@root/constants';
import { useOnClickOutside } from '@root/hooks';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { ICustomSelectProps } from './types';
export const CustomSelect = (props: ICustomSelectProps) => {
  const { options, onSelect, targetOption } = props;

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
        className={classNames(styles.label, {
          [styles.active]: isSelectActive,
        })}
        onClick={onLabelClick}
      >
        {targetOption ? (
          <p className={styles.labelValue}>{targetOption}</p>
        ) : (
          <p className={styles.placeholder}>Your profession</p>
        )}
        <ChevronIcon />
      </div>
      {isSelectActive && (
        <div className={styles.options}>
          {options.map(({ id, value }) => (
            <button
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
