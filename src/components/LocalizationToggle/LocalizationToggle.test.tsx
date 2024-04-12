import { localizationItems } from '@root/constants';

import { LocalizationToggle } from '.';

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

describe('LocalizationToggle component', () => {
  it('Component should render correctly', () => {
    render(<LocalizationToggle />);
  });
});
