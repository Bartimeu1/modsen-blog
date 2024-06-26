import { NetworksEnum } from '@root/types/enums';

import { ISocialProps } from './types';
import { Social } from '.';

import { render } from '@testing-library/react';

const mockedProps: ISocialProps = {
  links: [
    {
      id: 1,
      href: 'first href',
      name: NetworksEnum.instagram,
    },
    {
      id: 2,
      href: 'second href',
      name: NetworksEnum.linkedin,
    },
  ],
};

describe('Social component', () => {
  it('Component should render correctly', () => {
    render(<Social {...mockedProps} />);
  });

  it('should render correct amount of items', () => {
    const { getAllByTestId } = render(<Social {...mockedProps} />);

    const items = getAllByTestId('user-social-link');
    expect(items.length).toBe(mockedProps.links.length);
  });
});
