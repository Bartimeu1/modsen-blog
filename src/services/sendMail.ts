import { send } from '@emailjs/browser';
import {
  SENDMAIL_CONTACT_TEMPLATE_ID,
  SENDMAIL_PUBLIC_KEY,
  SENDMAIL_SERVICE_ID,
  SENDMAIL_SUBSCRIBE_TEMPLATE_ID,
} from '@root/config';

export const sendContactMail = (formValues: { [key: string]: string }) => {
  send(
    SENDMAIL_SERVICE_ID,
    SENDMAIL_CONTACT_TEMPLATE_ID,
    formValues,
    SENDMAIL_PUBLIC_KEY,
  );
};

export const sendSubscribeMail = (subscribeValues: {
  [key: string]: string;
}) => {
  send(
    SENDMAIL_SERVICE_ID,
    SENDMAIL_SUBSCRIBE_TEMPLATE_ID,
    subscribeValues,
    SENDMAIL_PUBLIC_KEY,
  );
};
