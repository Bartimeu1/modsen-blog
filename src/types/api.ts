import { CategoriesEnum } from './enums';
import { IAuthorLink } from './common';

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

export interface ITagItem {
  id: number;
  title: string;
  value: string;
}

export interface IAuthorData {
  id: number;
  name: string;
  city: string;
  avatar: string;
  links: IAuthorLink[];
}
