import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta = {
	component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus
				excepturi consectetur deserunt omnis eligendi, tempora sequi? Quidem quaerat,
				similique placeat sint dolor mollitia distinctio odit? Adipisci laboriosam earum
				exercitationem.
			</p>
		)
	}
};

export const WithTitle: Story = {
	args: {
		title: 'Title',
		children: (
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus
				excepturi consectetur deserunt omnis eligendi, tempora sequi? Quidem quaerat,
				similique placeat sint dolor mollitia distinctio odit? Adipisci laboriosam earum
				exercitationem.
			</p>
		)
	}
};
