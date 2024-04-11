import { getStory } from '@utils/storybook';

import { JoinUs } from '.';

import type { Meta } from '@storybook/react';

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

const meta: Meta<typeof JoinUs> = {
  title: 'JoinUs',
  component: JoinUs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const WithEnglish = getStory('en', enMessages, <JoinUs />);
export const WithRussian = getStory('ru', ruMessages, <JoinUs />);
