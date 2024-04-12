import { ToastTypesEnum } from '@root/types/enums';

export interface IToastProps {
  type: keyof typeof ToastTypesEnum;
  closeToast: () => void;
}
