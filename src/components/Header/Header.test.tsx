import { localizationItems } from '@root/constants';

import { Header } from '.';

import { render } from '@testing-library/react';

jest.mock('@/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/mock-pathname'),
  useParams: jest.fn(() => {}),
}));

jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => localizationItems.en),
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

describe('Header component', () => {
  it('Component should render correctly', () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
