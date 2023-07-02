import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '.';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  args: {
    size: 'md',
    placeholder: 'Password input',
    defaultValue: '',
    visibleLabel: 'Your password is shown',
    noVisibleLabel: 'Your password is hidden',
    defaultVisible: false,
    disabled: false,
    invalid: false,
    required: false,
    onVisibleChange: undefined,
  },
  argTypes: {
    size: { control: 'select' },
    visible: { control: false },
    onVisibleChange: { control: false },
    wrapperProps: { control: false },
    toggleButtonWrapperProps: { control: false },
    toggleButtonProps: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'My secret password',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
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
