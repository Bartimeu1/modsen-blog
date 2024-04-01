import classNames from 'classnames';

import { ContactForm, Map } from './components';
import styles from './styles.module.scss';

const ContactPage = () => {
  return (
    <main className={styles.contactPage}>
      <div className={classNames('container', styles.contactContainer)}>
        <section className={styles.topper}>
          <p className={styles.topperSubtitle}>CONTACT US</p>
          <h1>Let’s Start a Conversation</h1>
          <p className="infoText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </section>
        <section className={styles.contactInfo}>
          <div className={styles.contactBlock}>
            <h6>Working hours</h6>
            <h5>Monday To Friday</h5>
            <h5>9:00 AM to 8:00 PM </h5>
            <p>Our Support Team is available 24/7</p>
          </div>
          <div className={styles.contactBlock}>
            <h6>Contact Us</h6>
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
