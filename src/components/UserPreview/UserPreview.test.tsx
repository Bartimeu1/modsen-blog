import { render } from '@testing-library/react';

import { UserPreview } from '.';

import { IUserPreviewProps } from './types';

const mockedProps: IUserPreviewProps = {
  imageUrl: 'http://test',
  name: 'mocked name',
  city: 'mocked city',
};

describe('UserPreview component', () => {
  it('Component should render correctly', () => {
    render(<UserPreview {...mockedProps} />);
  });

  it('should render correct data from props', () => {
    const { getByText } = render(<UserPreview {...mockedProps} />);

    const { name, city } = mockedProps;

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(city)).toBeInTheDocument();
  });
});
