import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta = {
	component: Select
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		disabled: false,
		options: [
			{ id: '1', label: 'label1' },
			{ id: '2', label: 'label2' },
			{ id: '3', label: 'label3' }
		],
		placeholder: 'Select one...'
	}
};
