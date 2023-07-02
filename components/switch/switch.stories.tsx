import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    size: 'md',
    defaultChecked: false,
    disabled: false,
    required: false,
    name: 'Switch name',
    value: 'on',
  },
  argTypes: {
    size: { control: 'select' },
    checked: { control: false },
    onCheckedChange: { control: false },
    thumbProps: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

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
