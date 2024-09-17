import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';

const meta = {
	component: Accordion
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<>
				<Accordion {...args} />
				<Accordion {...args} />
				<Accordion {...args} />
			</>
		);
	},
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur molestias, cum nesciunt maiores, eaque exercitationem magnam rem ab, aut aliquid aliquam quis. Nobis reiciendis rem ea nesciunt, doloremque ab!',
		title: 'Accordion'
	}
};
