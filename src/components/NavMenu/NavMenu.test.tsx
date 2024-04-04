import { fireEvent, render } from '@testing-library/react';

import { NavMenu } from '.';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const mockedProps = {
  onLink: jest.fn(),
};

describe('LocalizationToggle component', () => {
  it('Component should render correctly', () => {
    render(<NavMenu {...mockedProps} />);
  });

  test('should call onLink prop after link click', () => {
    const { getAllByTestId } = render(<NavMenu {...mockedProps} />);

    const firstLink = getAllByTestId('nav-link')[0];
    fireEvent.click(firstLink);

    expect(mockedProps.onLink).toHaveBeenCalled();
  });
});
