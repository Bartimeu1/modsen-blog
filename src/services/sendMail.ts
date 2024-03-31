import { send } from '@emailjs/browser';
import {
  SENDMAIL_PUBLIC_KEY,
  SENDMAIL_SERVICE_ID,
  SENDMAIL_TEMPLATE_ID,
} from '@root/config';

export const sendMail = (formValues: { [key: string]: string }) => {
  send(
    SENDMAIL_SERVICE_ID,
    SENDMAIL_TEMPLATE_ID,
    formValues,
    SENDMAIL_PUBLIC_KEY,
  );
};
