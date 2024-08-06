import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';
import Avatar from '../Avatar/Avatar';

const meta = {
	component: Dropdown
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Dropdown Trigger',
		items: [
			{ label: 'One', disabled: true },
			{ label: 'Two' },
			{ label: 'Three' },
			{ label: 'Four' }
		]
	}
};

export const WithHeader: Story = {
	args: {
		header: (
			<div>
				<div>John Doe</div>
				<div>@username</div>
			</div>
		),
		label: 'Dropdown Trigger',
		items: [
			{ label: 'One', disabled: true },
			{ label: 'Two' },
			{ label: 'Three' },
			{ label: 'Four' }
		]
	}
};

export const WithGroups: Story = {
	args: {
		label: 'Dropdown Trigger',
		groups: [
			{
				items: [{ label: 'One', disabled: true }, { label: 'Two' }]
			},
			{
				items: [{ label: 'Three' }, { label: 'Four' }]
			},
			{
				items: [{ label: 'Three' }, { label: 'Four' }]
			}
		]
	}
};

export const WithTrigger: Story = {
	args: {
		trigger: <Avatar name="Jhon Doe" />,
		items: [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }, { label: 'Four' }]
	}
};

export const WithAlignment: Story = {
	render: (args) => {
		return (
			<div style={{ float: 'right' }}>
				<Dropdown {...args} />
			</div>
		);
	},
	args: {
		alignment: 'right',
		label: 'Right',
		items: [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }, { label: 'Four' }]
	}
};
