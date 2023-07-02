import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  args: {
    htmlFor: 'input-id',
    children: 'Label',
    fontSize: 'md',
  },
  argTypes: {
    fontSize: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

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
