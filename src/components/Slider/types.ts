import { StaticImageData } from 'next/image';

export interface ISliderProps {
  slides: {
    id: number;
    imageUrl: StaticImageData;
    name: string;
    city: string;
    text: string;
  }[];
}
