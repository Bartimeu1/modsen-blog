import { CategoryList } from '.';

import { render } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

describe('CategoryList component', () => {
  test('component should render correctly', () => {
    render(<CategoryList />);
  });
});
