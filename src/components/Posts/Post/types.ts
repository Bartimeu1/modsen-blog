import { PostTypesEnum } from '@root/types/enums';

export interface IPostProps {
  type: keyof typeof PostTypesEnum;
  id: number;
  title: string;
  author: {
    name: string;
    city: string;
    avatar: string;
  };
  createdDate: string;
  image?: string;
  text?: string;
}
