import { CategoriesEnum } from './enums';

export interface IPostData {
  id: number;
  title: string;
  author: {
    name: string;
    city: string;
    avatar: string;
  };
  tag: keyof typeof CategoriesEnum;
  image: string;
  createdDate: string;
  text: string;
}
