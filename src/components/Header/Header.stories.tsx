import { getStory } from '@utils/storybook';

import { Header } from '.';

import type { Meta } from '@storybook/react';

const enMessages = {
  Header: {
    videoButton: 'Video about us',
    modalTitle: 'About Us',
    postedOn: 'Posted On',
    readMore: 'Read More >',
  },
  NavMenu: {
    home: 'Home',
    blog: 'Blog',
    'about-us': 'About Us',
    'contact-us': 'Contact Us',
  },
};

const ruMessages = {
  Header: {
    videoButton: 'Видео о нас',
    modalTitle: 'О Нас',
    readMore: 'Читать ещё >',
    postedOn: 'Опубликовано в',
  },
  NavMenu: {
    home: 'Главная',
    blog: 'Блог',
    'about-us': 'О нас',
    'contact-us': 'Связь',
  },
};

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const WithEnglish = getStory('en', enMessages, <Header />);
export const WithRussian = getStory('ru', ruMessages, <Header />);
