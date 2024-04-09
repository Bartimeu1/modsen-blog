import { CategoriesEnum } from '@root/types/enums';
import { render } from '@testing-library/react';

import { PostsPagination } from '.';

import { IPostsPaginationProps } from './types';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const mockedPosts: IPostsPaginationProps = {
  posts: [
    {
      id: 1,
      title: 'Post 1',
      text: 'Text 1',
      image: '/http://image1.jpg',
      category: CategoriesEnum.business,
      author: {
        name: 'mocked name',
        avatar: 'mocked avatar',
        city: 'mocked city',
      },
      createdDate: 'mocked date',
      tags: ['tag'],
    },
    {
      id: 2,
      title: 'Post 2',
      text: 'Text 2',
      image: '/http://image1.jpg',
      category: CategoriesEnum.business,
      author: {
        name: 'mocked name',
        avatar: 'mocked avatar',
        city: 'mocked city',
      },
      createdDate: 'mocked date',
      tags: ['tag'],
    },
  ],
};

describe('PostsPagination component', () => {
  it('Component should render correctly', () => {
    render(<PostsPagination {...mockedPosts} />);
  });

  it('should render correct amount of items', () => {
    const { getAllByTestId } = render(<PostsPagination {...mockedPosts} />);

    const items = getAllByTestId('tagged-post');
    expect(items.length).toBe(mockedPosts.posts.length);
  });
});
