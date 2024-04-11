import { ToastTypesEnum } from '@root/types/enums';

import { Toast } from '.';

import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockedProps = {
  type: ToastTypesEnum.success,
  closeToast: () => {},
};

export const WithSuccess: Story = {
  args: mockedProps,
  render: () => <Toast {...mockedProps} />,
};

export const WithError: Story = {
  args: mockedProps,
  render: () => <Toast {...mockedProps} type={ToastTypesEnum.error} />,
};
