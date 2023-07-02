import type { Meta, StoryObj } from '@storybook/react';
import { IconBrandReact } from '@tabler/icons-react';
import { IconButton } from '.';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  args: {
    children: <IconBrandReact size="1rem" aria-hidden="true" focusable="false" />,
    'aria-label': 'Icon button',
    size: 'md',
    variant: 'secondary',
    rounded: false,
    disabled: false,
  },
  argTypes: {
    children: { control: false },
    size: { control: 'select' },
    variant: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
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

export const TertiaryVariant: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
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
