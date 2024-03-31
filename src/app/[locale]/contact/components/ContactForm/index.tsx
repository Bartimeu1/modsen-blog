'use client';

import { ChangeEvent, SyntheticEvent, useState } from 'react';

import { CustomSelect } from '@components/CustomSelect';
import { sendMail } from '@services/sendMail';
import { ValidationError } from 'yup';

import { FormField } from '../FormField';
import { baseFormValues, selectOptions, validationSchema } from './config';
import styles from './styles.module.scss';
import { IErrorsObject } from './types';

export const ContactForm = () => {
  const [formValues, setFormValues] = useState(baseFormValues);
  const [validationErrors, setValidationErrors] = useState<IErrorsObject>({});
  const [targetSelectOption, setTargetSelectOption] = useState('');

  const handleValidationErrors = (error: ValidationError) => {
    const errors: IErrorsObject = {};
    error.inner.forEach(({ path, message }) => {
      if (path) {
        errors[path] = message;
      }
    });

    setValidationErrors(errors);
  };

  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    validationSchema
      .validate(formValues, { abortEarly: false })
      .then(() => {
        sendMail(formValues);
        setFormValues(baseFormValues);
        setTargetSelectOption('');
        setValidationErrors({});
      })
      .catch((error: ValidationError) => {
        handleValidationErrors(error);
      });
  };

  const onFormValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSelectValueChange = (value: string) => {
    setFormValues((prevState) => ({ ...prevState, profession: value }));
    setTargetSelectOption(value);
  };

  const {
    fullName: fullNameError,
    email: emailError,
    message: messageError,
    profession: professionError,
  } = validationErrors;

  return (
    <form className={styles.contactForm} onSubmit={onFormSubmit}>
      <FormField errorText={fullNameError}>
        <input
          type="text"
          name="fullName"
          className={styles.contactInput}
          placeholder="Full Name"
          value={formValues.fullName}
          onChange={onFormValueChange}
        />
      </FormField>
      <FormField errorText={emailError}>
        <input
          type="text"
          name="email"
          className={styles.contactInput}
          placeholder="Your Email"
          value={formValues.email}
          onChange={onFormValueChange}
        />
      </FormField>
      <FormField errorText={professionError}>
        <CustomSelect
          options={selectOptions}
          onSelect={onSelectValueChange}
          targetOption={targetSelectOption}
        />
      </FormField>
      <FormField errorText={messageError}>
        <textarea
          className={styles.contactTextarea}
          name="message"
          placeholder="Message"
          value={formValues.message}
          onChange={onFormValueChange}
        />
      </FormField>
      <input
        type="submit"
        className={styles.submitButton}
        value="Send Message"
      />
    </form>
  );
};