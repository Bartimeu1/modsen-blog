import { render } from '@testing-library/react';

import { Button } from '.';

const mockedProps = {
  href: 'mocked href',
  text: 'mocked text',
};

describe('Button component', () => {
  it('Component should render correctly', () => {
    render(<Button {...mockedProps} />);
  });
});
