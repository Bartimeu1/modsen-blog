import { render } from '@testing-library/react';

import { Footer } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

describe('Footer component', () => {
  it('Component should render correctly', () => {
    const { getByTestId } = render(<Footer />);

    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
