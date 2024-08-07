import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './RadioButton';
import { fn } from '@storybook/test';

const meta = {
	component: RadioButton
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		checked: false,
		disabled: false,
		label: 'Label',
		onChange: fn()
	}
};

export const Group: Story = {
	render: (args) => {
		return (
			<div>
				<RadioButton value={1} {...args} />
				<RadioButton value={1} {...args} />
				<RadioButton value={1} {...args} />
			</div>
		);
	},
	args: {
		disabled: false,
		label: 'Label',
		name: 'check'
	}
};
