import { ToastTypesEnum } from '@root/types/enums';

export interface IToastControls {
  isVisible: boolean;
  type: keyof typeof ToastTypesEnum;
}
