import { PostTypesEnum } from '@root/types/enums';

export interface IPostProps {
  id: number;
  type: keyof typeof PostTypesEnum;
  title: string;
  author: {
    name: string;
    city: string;
    avatar: string;
  };
  createdDate: string;
  text?: string;
  image?: string;
}
