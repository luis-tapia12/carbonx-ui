import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';
import { fn } from '@storybook/test';

const meta = {
	component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		checked: false,
		disabled: false,
		label: 'Label',
		value: '',
		onChange: fn()
	}
};
