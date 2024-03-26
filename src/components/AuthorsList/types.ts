import { IAuthorLink } from '@root/types/common';

export interface IAuthorsListProps {
  authors: {
    id: number;
    name: string;
    desc: string;
    image: string;
    links: IAuthorLink[];
  }[];
}
