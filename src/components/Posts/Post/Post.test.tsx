import { PostTypesEnum } from '@root/types/enums';

import { Post } from '.';

import { render } from '@testing-library/react';

const mockedProps = {
  id: 1,
  title: 'mocked title',
  author: {
    name: 'mocked name',
    avatar: 'mocked avatar',
    city: 'mocked city',
  },
  type: PostTypesEnum.large,
  text: 'mocked text',
  createdDate: 'mocked date',
};

describe('Post component', () => {
  it('Component should render correctly', () => {
    render(<Post {...mockedProps} />);
  });

  it('Component should render correctly with all required props', () => {
    const { getByText } = render(<Post {...mockedProps} />);

    const { title, text } = mockedProps;

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });
});
