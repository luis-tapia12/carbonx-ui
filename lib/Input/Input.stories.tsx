import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
	component: Input,
	argTypes: {
		type: {
			options: ['text', 'password', 'number'],
			control: { type: 'radio' }
		}
	}
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		disabled: false
	}
};

export const WithError: Story = {
	args: {
		disabled: false,
		error: 'This field is invalid',
		label: 'Label'
	}
};
