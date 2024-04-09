import React from 'react';
import type { Preview } from '@storybook/react';
import { Inter, Sen } from 'next/font/google';

const fontSen = Sen({ subsets: ['latin'], variable: '--font-primary' });
const fontInter = Inter({ subsets: ['latin'], variable: '--font-secondary' });

import { IntlProvider } from 'next-intl';

import '../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${fontSen.variable} ${fontInter.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
