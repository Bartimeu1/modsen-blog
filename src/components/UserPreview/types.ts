import { StaticImageData } from 'next/image';

export interface IUserPreviewProps {
  imageUrl: StaticImageData;
  name: string;
  city: string;
}
