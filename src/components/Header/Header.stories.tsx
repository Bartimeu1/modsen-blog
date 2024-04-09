import type { Meta, StoryObj } from '@storybook/react';
import { IntlProvider } from 'next-intl';
import { AbstractIntlMessages } from 'next-intl';

import { Header } from '.';

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

const getStory = (
  locale: string,
  messages: AbstractIntlMessages,
): StoryObj => ({
  render: () => (
    <IntlProvider locale={locale} messages={messages}>
      <Header />
    </IntlProvider>
  ),
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
});

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const WithEnglish = getStory('en', enMessages);
export const WithRussian = getStory('ru', ruMessages);
