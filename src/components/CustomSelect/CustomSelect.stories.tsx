import { IntlProvider } from 'next-intl';
import { AbstractIntlMessages } from 'next-intl';

import { CustomSelect } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const enMessages = {
  Select: {
    placeholder: 'Ваша профессия',
  },
};

const ruMessages = {
  Select: {
    placeholder: 'Your profession',
  },
};

const mockedProps = {
  onSelect: () => {},
  options: [
    { id: 1, value: 'Developer' },
    { id: 2, value: 'Project manager' },
    { id: 3, value: 'Scrum Master' },
    { id: 4, value: 'Designer' },
  ],
  targetOption: '',
};

const getStory = (
  locale: string,
  messages: AbstractIntlMessages,
): StoryObj => ({
  render: () => (
    <IntlProvider locale={locale} messages={messages}>
      <div style={{ minWidth: '320px' }}>
        <CustomSelect {...mockedProps} />
      </div>
    </IntlProvider>
  ),
});

const meta: Meta<typeof CustomSelect> = {
  title: 'CustomSelect',
  component: CustomSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const WithEnglish = getStory('en', enMessages);
export const WithRussian = getStory('ru', ruMessages);
