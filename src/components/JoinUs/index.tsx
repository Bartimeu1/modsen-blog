import { Button } from '@components/Button';
import { routes } from '@root/constants';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export const JoinUs = () => {
  const t = useTranslations('JoinUs');

  return (
    <section className={styles.joinUs} data-testid="join-us">
      <h2 className="title">{t('title')}</h2>
      <p className="infoText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button text={t('button')} href={routes.contact} />
    </section>
  );
};
