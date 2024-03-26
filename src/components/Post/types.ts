import { PostTypesEnum } from '@root/types/enums';

export interface IPostProps {
  type: keyof typeof PostTypesEnum;
  title: string;
  author: string;
  date: string;
  text?: string;
  image?: string;
}
