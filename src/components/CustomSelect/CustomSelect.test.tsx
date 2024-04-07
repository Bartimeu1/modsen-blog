import { fireEvent, render } from '@testing-library/react';

import { CustomSelect } from '.';

import { ICustomSelectProps } from './types';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const mockedProps: ICustomSelectProps = {
  onSelect: jest.fn(),
  targetOption: 'test option',
  options: [
    { id: 1, value: 'first option' },
    { id: 2, value: 'second option' },
  ],
};

describe('FormSelect component', () => {
  test('component should render correctly', () => {
    render(<CustomSelect {...mockedProps} />);
  });

  test('opens dropdown when select is clicked', () => {
    const { getByTestId } = render(<CustomSelect {...mockedProps} />);

    const selectLabel = getByTestId('select-label');
    fireEvent.click(selectLabel);

    const selectDropdown = getByTestId('select-dropdown');
    expect(selectDropdown).toBeInTheDocument();
  });

  test('should call onSelect prop with correct value after select', () => {
    const { getByTestId, getAllByTestId } = render(
      <CustomSelect {...mockedProps} />,
    );

    const selectLabel = getByTestId('select-label');
    fireEvent.click(selectLabel);

    const firstSelectOption = getAllByTestId('select-dropdown-option')[0];
    fireEvent.click(firstSelectOption);

    expect(mockedProps.onSelect).toHaveBeenCalledWith(
      mockedProps.options[0].value,
    );
  });
});
