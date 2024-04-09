import { ToastTypesEnum } from '@root/types/enums';

export interface IErrorsObject {
  [key: string]: string;
}

export interface IToastControls {
  isVisible: boolean;
  type: keyof typeof ToastTypesEnum;
}
