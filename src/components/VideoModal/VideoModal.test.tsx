import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { VideoModal } from '.';
import { IVideoModalProps } from './types';

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(() => jest.fn((key) => key)),
}));

const mockedProps: IVideoModalProps = {
  closeModal: jest.fn(),
};

describe('VideoModal component', () => {
  it('Component should render correctly', () => {
    render(<VideoModal {...mockedProps} />);
  });

  test('should call closeTweetModal after outside click', async () => {
    render(<VideoModal {...mockedProps} />);

    userEvent.click(document.body);

    await waitFor(() => {
      expect(mockedProps.closeModal).toHaveBeenCalled();
    });
  });
});
