import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Avatar from './Avatar';

const meta = {
	component: Avatar
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'John Doe',
		onClick: fn()
	}
};

export const WithImage: Story = {
	args: {
		name: 'Avatar',
		src: 'https://picsum.photos/200'
	}
};

export const WithBorder: Story = {
	args: {
		bordered: true,
		name: 'Avatar',
		src: 'https://picsum.photos/200'
	}
};

export const WithSize: Story = {
	args: {
		name: 'Avatar',
		size: '70px',
		src: 'https://picsum.photos/200'
	}
};
