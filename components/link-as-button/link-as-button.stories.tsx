import type { Meta, StoryObj } from '@storybook/react';
import { IconBrandReact } from '@tabler/icons-react';
import { LinkAsButton } from '.';

const meta: Meta<typeof LinkAsButton> = {
  title: 'Components/LinkAsButton',
  component: LinkAsButton,
  args: {
    href: '#',
    children: 'Link as button',
    size: 'md',
    variant: 'secondary',
    fullWidth: false,
    rounded: false,
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    icon: { control: false },
    className: { control: false },
    as: { control: false },
    replace: { control: false },
    scroll: { control: false },
    shallow: { control: false },
    passHref: { control: false },
    prefetch: { control: false },
    locale: { control: false },
    legacyBehavior: { control: false },
    onMouseEnter: { control: false },
    onTouchStart: { control: false },
    onClick: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof LinkAsButton>;

export const Default: Story = {};

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

export const WithIcon: Story = {
  args: {
    icon: <IconBrandReact size="1rem" aria-hidden="true" focusable="false" />,
  },
};
