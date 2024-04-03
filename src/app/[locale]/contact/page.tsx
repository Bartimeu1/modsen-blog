import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { ContactForm, Map } from './components';
import styles from './styles.module.scss';

const ContactPage = () => {
  const t = useTranslations('Contact');

  return (
    <main className={styles.contactPage}>
      <div className={classNames('container', styles.contactContainer)}>
        <section className={styles.topper}>
          <p className={styles.topperSubtitle}>
            {t('topperSubtitle').toUpperCase()}
          </p>
          <h1>{t('topperTitle')}</h1>
          <p className="infoText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </section>
        <section className={styles.contactInfo}>
          <div className={styles.contactBlock}>
            <h6>{t('hoursTitle')}</h6>
            <h5>{t('timeText')}</h5>
            <p>{t('supportText')}</p>
          </div>
          <div className={styles.contactBlock}>
            <h6>{t('contactTitle')}</h6>
            <h5>020 7993 2905</h5>
            <p>hello@finsweet.com</p>
          </div>
        </section>
        <ContactForm />
      </div>
      <Map />
    </main>
  );
};

export default ContactPage;
