import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'success', 'error', 'warn', 'info'],
			control: { type: 'radio' }
		}
	}
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Button',
		disabled: false,
		onClick: fn()
	}
};

export const Variant: Story = {
	args: {
		children: 'Button',
		disabled: false,
		onClick: fn(),
		variant: 'secondary'
	}
};
