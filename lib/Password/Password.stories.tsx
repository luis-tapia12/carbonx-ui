import type { Meta, StoryObj } from '@storybook/react';

import Password from './Password';

const meta = {
	component: Password
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		visible: true
	}
};
