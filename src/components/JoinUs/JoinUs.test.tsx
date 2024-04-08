import { localizationItems } from '@root/constants';
import { render } from '@testing-library/react';

import { JoinUs } from '.';

jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => localizationItems.en),
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

describe('JoinUs component', () => {
  it('Component should render correctly', () => {
    const { getByTestId } = render(<JoinUs />);

    expect(getByTestId('join-us')).toBeInTheDocument();
  });
});
