import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from '.';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  args: {
    children: 'A valid email address is required.',
    fontSize: 'md',
    withIcon: true,
  },
  argTypes: {
    fontSize: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {};

export const WithoutIcon: Story = {
  args: {
    withIcon: false,
  },
};

export const SmallFontSize: Story = {
  args: {
    fontSize: 'sm',
  },
};

export const MediumFontSize: Story = {
  args: {
    fontSize: 'md',
  },
};

export const LargeFontSize: Story = {
  args: {
    fontSize: 'lg',
  },
};
