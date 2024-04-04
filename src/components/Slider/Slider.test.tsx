import { fireEvent, render } from '@testing-library/react';
import { StaticImageData } from 'next/image';

import { Slider } from '.';
import { ISliderProps } from './types';

const mockedProps: ISliderProps = {
  slides: [
    {
      id: 1,
      imageUrl: { src: 'http://image1' } as StaticImageData,
      name: 'first name',
      city: 'mocked city',
      text: 'first text',
    },
    {
      id: 2,
      imageUrl: { src: 'http://image2' } as StaticImageData,
      name: 'second name',
      city: 'mocked city',
      text: 'second text',
    },
  ],
};

describe('Slider component', () => {
  it('renders without crashing', () => {
    render(<Slider {...mockedProps} />);
  });

  it('changes active slide to next slide when next button is clicked', () => {
    const { getByText, getByTestId } = render(<Slider {...mockedProps} />);

    const nextButton = getByTestId('slider-next-button');

    fireEvent.click(nextButton);
    expect(getByText('second text')).toBeInTheDocument();
  });

  it('changes active slide to previous slide when prev button is clicked', () => {
    const { getByText, getByTestId } = render(<Slider {...mockedProps} />);

    const nextButton = getByTestId('slider-next-button');
    const prevButton = getByTestId('slider-prev-button');

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    expect(getByText('first text')).toBeInTheDocument();
  });
});
