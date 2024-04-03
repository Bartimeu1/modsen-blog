import { tagItems } from '@root/constants';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';
import { ITagsControls } from './type';

export const TagsControls = (props: ITagsControls) => {
  const { onTagButtonClick, targetTags } = props;

  const t = useTranslations('Category');

  return (
    <div className={styles.tagsControls}>
      <h2>{t('tagsTitle')}</h2>
      <div className={styles.tagsList}>
        {tagItems.map(({ id, value, title }) => (
          <button
            key={id}
            onClick={onTagButtonClick(value)}
            className={classNames(styles.tagButton, {
              [styles.active]: targetTags.includes(value),
            })}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
};
