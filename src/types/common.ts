import { NetworksEnum } from './enums';

export interface IAuthorLink {
  id: number;
  href: string;
  name: keyof typeof NetworksEnum;
}
