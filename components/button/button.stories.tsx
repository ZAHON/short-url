import type { Meta, StoryObj } from '@storybook/react';
import { IconBrandReact } from '@tabler/icons-react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    type: 'button',
    size: 'md',
    variant: 'secondary',
    fullWidth: false,
    rounded: false,
    disabled: false,
    loading: false,
  },
  argTypes: {
    type: { control: 'select' },
    size: { control: 'select' },
    variant: { control: 'select' },
    icon: { control: false },
    loaderProps: { control: false },
    innerProps: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const DefaultVariant: Story = {
  args: {
    variant: 'default',
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
  },
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
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

export const WithIcon: Story = {
  args: {
    icon: <IconBrandReact size="1rem" aria-hidden="true" focusable="false" />,
  },
};
