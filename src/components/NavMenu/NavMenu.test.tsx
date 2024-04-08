import { fireEvent, render } from '@testing-library/react';

import { NavMenu } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

jest.mock('@/navigation', () => ({
  usePathname: jest.fn(() => '/mock-pathname'),
}));

const mockedProps = {
  onLink: jest.fn(),
};

describe('LocalizationToggle component', () => {
  it('Component should render correctly', () => {
    render(<NavMenu {...mockedProps} />);
  });

  test('should call onLink prop after link click', () => {
    const { getByTestId } = render(<NavMenu {...mockedProps} />);

    const blogLink = getByTestId('blog-link');
    fireEvent.click(blogLink);

    expect(mockedProps.onLink).toHaveBeenCalled();
  });
});
