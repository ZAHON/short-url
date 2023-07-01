import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '.';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  args: {
    orientation: 'horizontal',
    label: '',
    labelFontSize: 'sm',
  },
  argTypes: {
    orientation: { control: 'select' },
    labelFontSize: { control: 'select' },
    labelProps: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="h-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const HorizontalOrientation: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const VerticalOrientation: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const WithLabel: Story = {
  args: {
    orientation: 'horizontal',
    label: 'Label',
  },
};
