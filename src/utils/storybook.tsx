import { ReactNode } from 'react';
import { IntlProvider } from 'next-intl';
import { AbstractIntlMessages } from 'next-intl';

import { StoryObj } from '@storybook/react';

export const getStory = (
  locale: string,
  messages: AbstractIntlMessages,
  children: ReactNode,
): StoryObj => ({
  render: () => (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  ),
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
});
