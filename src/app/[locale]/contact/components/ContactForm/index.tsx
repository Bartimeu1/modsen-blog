'use client';

import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { CustomSelect } from '@components/CustomSelect';
import { Toast } from '@components/Toast';
import { ToastTypesEnum } from '@root/types/enums';
import { sendContactMail } from '@services/sendMail';
import { useTranslations } from 'next-intl';
import { ValidationError } from 'yup';

import { FormField } from '../FormField';

import { baseFormValues, selectOptions, validationSchema } from './config';
import { IErrorsObject, IToastControls } from './types';

import styles from './styles.module.scss';

export const ContactForm = () => {
  const t = useTranslations('Contact.Form');

  const [formValues, setFormValues] = useState(baseFormValues);
  const [validationErrors, setValidationErrors] = useState<IErrorsObject>({});
  const [targetSelectOption, setTargetSelectOption] = useState('');
  const [toastControls, setToastControls] = useState<IToastControls>({
    isVisible: false,
    type: ToastTypesEnum.success,
  });

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
        sendContactMail(formValues);
        setToastControls({ isVisible: true, type: ToastTypesEnum.success });
        setFormValues(baseFormValues);
        setTargetSelectOption('');
        setValidationErrors({});
      })
      .catch((error: ValidationError) => {
        handleValidationErrors(error);
        setToastControls({ isVisible: true, type: ToastTypesEnum.error });
      });
  };

  const onFormValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSelectValueChange = useCallback((value: string) => {
    setFormValues((prevState) => ({ ...prevState, profession: value }));
    setTargetSelectOption(value);
  }, []);

  const closeToast = useCallback(() => {
    setToastControls((prevState) => ({ ...prevState, isVisible: false }));
  }, []);

  const {
    fullName: fullNameError,
    email: emailError,
    message: messageError,
    profession: professionError,
  } = validationErrors;

  return (
    <>
      <form className={styles.contactForm} onSubmit={onFormSubmit}>
        <FormField errorText={fullNameError}>
          <input
            type="text"
            name="fullName"
            className={styles.contactInput}
            placeholder={t('name')}
            value={formValues.fullName}
            onChange={onFormValueChange}
          />
        </FormField>
        <FormField errorText={emailError}>
          <input
            type="text"
            name="email"
            className={styles.contactInput}
            placeholder={t('email')}
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
            placeholder={t('message')}
            value={formValues.message}
            onChange={onFormValueChange}
          />
        </FormField>
        <input
          data-testid="form-submit"
          type="submit"
          className={styles.submitButton}
          value={t('submit')}
        />
      </form>
      {toastControls.isVisible && (
        <Toast type={toastControls.type} closeToast={closeToast} />
      )}
    </>
  );
};
