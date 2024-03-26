import firstAuthor from '@assets/images/authorFirst.jpg';
import fourthAuthor from '@assets/images/authorFourth.jpg';
import secondAuthor from '@assets/images/authorSecond.jpg';
import thirdAuthor from '@assets/images/authorThird.jpg';
import { NetworksEnum } from '@root/types/enums';

const mockedAuthorLinks = [
  { id: 1, name: NetworksEnum.facebook, href: '#' },
  {
    id: 2,
    name: NetworksEnum.twitter,
    href: '#',
  },
  {
    id: 3,
    name: NetworksEnum.instagram,
    href: '#',
  },
  {
    id: 4,
    name: NetworksEnum.linkedin,
    href: '#',
  },
];

export const authors = [
  {
    id: 1,
    name: 'Floyd Miles',
    desc: 'Content Writer @Company',
    image: firstAuthor.src,
    links: mockedAuthorLinks,
  },
  {
    id: 2,
    name: 'Dianne Russell',
    desc: 'Content Writer @Company',
    image: secondAuthor.src,
    links: mockedAuthorLinks,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    desc: 'Content Writer @Company',
    image: thirdAuthor.src,
    links: mockedAuthorLinks,
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    desc: 'Content Writer @Company',
    image: fourthAuthor.src,
    links: mockedAuthorLinks,
  },
];
