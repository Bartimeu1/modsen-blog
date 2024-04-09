import type { Meta, StoryObj } from '@storybook/react';
import { IntlProvider } from 'next-intl';
import { AbstractIntlMessages } from 'next-intl';

import { JoinUs } from '.';

const enMessages = {
  JoinUs: {
    title: 'Join our team to be a part of our story',
    button: 'Join Now',
  },
};

const ruMessages = {
  JoinUs: {
    title: 'Присоединяйтесь к нашей команде, чтобы стать частью нашей истории',
    button: 'Присоединиться сейчас',
  },
};

const getStory = (
  locale: string,
  messages: AbstractIntlMessages,
): StoryObj => ({
  render: () => (
    <IntlProvider locale={locale} messages={messages}>
      <JoinUs />
    </IntlProvider>
  ),
});

const meta: Meta<typeof JoinUs> = {
  title: 'JoinUs',
  component: JoinUs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const WithEnglish = getStory('en', enMessages);
export const WithRussian = getStory('ru', ruMessages);
