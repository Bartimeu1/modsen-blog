import { emailValidationText, requiredValidationText } from '@root/constants';
import * as yup from 'yup';

export const selectOptions = [
  { id: 1, value: 'Developer' },
  { id: 2, value: 'Project manager' },
  { id: 3, value: 'Scrum Master' },
  { id: 4, value: 'Designer' },
];

export const validationSchema = yup.object({
  email: yup
    .string()
    .email(emailValidationText)
    .required(requiredValidationText),
  message: yup.string().max(400).required(requiredValidationText),
  fullName: yup.string().min(2).max(20).required(requiredValidationText),
  profession: yup.string(),
});

export const baseFormValues = {
  fullName: '',
  email: '',
  message: '',
  profession: '',
};
