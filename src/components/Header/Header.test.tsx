import { render } from '@testing-library/react';

import { Header } from '.';

jest.mock('@/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(() => '/mock-pathname'),
  useParams: jest.fn(() => {}),
}));

jest.mock('next-intl', () => ({
  useLocale: jest.fn(() => 'en'),
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

describe('Header component', () => {
  it('Component should render correctly', () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
