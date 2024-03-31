'use client';

import { ChangeEvent, SyntheticEvent, useState } from 'react';

import { CustomSelect } from '@components/CustomSelect';
import { send } from '@emailjs/browser';
import {
  SENDMAIL_PUBLIC_KEY,
  SENDMAIL_SERVICE_ID,
  SENDMAIL_TEMPLATE_ID,
} from '@root/config';

import { selectOptions } from './config';
import styles from './styles.module.scss';

export const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    message: '',
    profession: '',
  });

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    send(
      SENDMAIL_SERVICE_ID,
      SENDMAIL_TEMPLATE_ID,
      formValues,
      SENDMAIL_PUBLIC_KEY,
    );
  };

  const onFormValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSelectValueChange = (value: string) => {
    setFormValues((prevState) => ({ ...prevState, profession: value }));
  };

  return (
    <form className={styles.contactForm} onSubmit={onFormSubmit}>
      <input
        type="text"
        name="fullName"
        className={styles.contactInput}
        placeholder="Full Name"
        value={formValues.fullName}
        onChange={onFormValueChange}
      />
      <input
        type="text"
        name="email"
        className={styles.contactInput}
        placeholder="Your Email"
        value={formValues.email}
        onChange={onFormValueChange}
      />
      <CustomSelect options={selectOptions} onSelect={onSelectValueChange} />
      <textarea
        className={styles.contactTextarea}
        name="message"
        placeholder="Message"
        value={formValues.message}
        onChange={onFormValueChange}
      />
      <input
        type="submit"
        className={styles.submitButton}
        value="Send Message"
      />
    </form>
  );
};
