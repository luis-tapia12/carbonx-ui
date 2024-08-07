import type { Meta, StoryObj } from '@storybook/react';

import Switch from './Switch';
import { fn } from '@storybook/test';
import { useState } from 'react';

const meta = {
	component: Switch
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(args.checked);

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setChecked(event.target.checked);
			args.onChange?.(event);
		};

		return <Switch {...args} checked={checked} onChange={handleChange} />;
	},
	args: {
		disabled: false,
		checked: true,
		onChange: fn()
	}
};
