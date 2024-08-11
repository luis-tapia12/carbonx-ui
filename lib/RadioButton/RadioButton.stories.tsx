import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './RadioButton';

const meta = {
	component: RadioButton
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		disabled: false,
		label: 'Label'
	}
};

export const WithError: Story = {
	args: {
		disabled: false,
		error: 'This field is invalid',
		label: 'Label'
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
