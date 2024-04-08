import { emailValidationText, requiredValidationText } from '@root/constants';
import { NetworksEnum } from '@root/types/enums';
import * as yup from 'yup';

export const mockedNetworkLinks = [
  { id: 1, name: NetworksEnum.facebook, href: '#' },
  {
    id: 2,
    name: NetworksEnum.twitter,
    href: '#',
  },
  {
    id: 3,
    name: NetworksEnum.instagram,
    href: '#',
  },
  {
    id: 4,
    name: NetworksEnum.linkedin,
    href: '#',
  },
];

export const inputValidationSchema = yup.object({
  email: yup
    .string()
    .email(emailValidationText)
    .required(requiredValidationText),
});
