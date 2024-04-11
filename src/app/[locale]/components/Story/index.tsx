import { useTranslations } from 'next-intl';

import { Button } from '@components/Button';

import styles from './styles.module.scss';

export const Story = () => {
  const t = useTranslations('Main.Story');

  return (
    <div className={styles.story}>
      <div className={styles.storyContent}>
        <h6 className="subtitle">{t('subtitle')}</h6>
        <h2 className={styles.storyTitle}>{t('title')}</h2>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Button text={t('button')} />
      </div>
    </div>
  );
};
