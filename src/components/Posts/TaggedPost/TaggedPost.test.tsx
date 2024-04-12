import { ITaggedPostProps } from './types';
import { TaggedPost } from '.';

import { render } from '@testing-library/react';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const mockedPosts: ITaggedPostProps = {
  id: 1,
  title: 'mocked title',
  text: 'mocked text',
  image: 'http://test1',
  category: 'mocked category',
};

describe('TaggedPost component', () => {
  it('Component should render correctly', () => {
    render(<TaggedPost {...mockedPosts} />);
  });

  it('should render post title and text from props', () => {
    const { getByText } = render(<TaggedPost {...mockedPosts} />);

    const { title, text } = mockedPosts;

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });
});
