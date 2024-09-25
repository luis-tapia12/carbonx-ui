import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta = {
	component: Badge,
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'success', 'error', 'warn', 'info'],
			control: { type: 'radio' }
		}
	}
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Badge'
	}
};

export const Variant: Story = {
	args: {
		children: 'Badge',
		variant: 'secondary'
	}
};
