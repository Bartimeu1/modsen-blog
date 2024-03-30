import { CategoriesEnum } from './enums';

export interface IPostData {
  id: number;
  title: string;
  author: {
    name: string;
    city: string;
    avatar: string;
  };
  category: keyof typeof CategoriesEnum;
  tags: string[];
  image: string;
  createdDate: string;
  text: string;
}
