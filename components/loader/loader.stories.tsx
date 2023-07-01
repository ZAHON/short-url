import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  args: {
    size: 'md',
    speed: 1000,
    label: 'Loading, please wait...',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    wrapperProps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
  },
};

export const CustomSize: Story = {
  args: {
    size: 48,
  },
  argTypes: {
    size: { control: 'number' },
  },
};
