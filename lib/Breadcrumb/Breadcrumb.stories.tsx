import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './Breadcrumb';
import { fn } from '@storybook/test';

const meta = {
	component: Breadcrumb
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		steps: [
			{ id: 'step1', label: 'Step 1' },
			{ id: 'step2', label: 'Step 2' },
			{ id: 'step3', label: 'Step 3' }
		]
	}
};

export const Clickable: Story = {
	args: {
		home: 'index',
		steps: [
			{ id: 'step1', label: 'Step 1' },
			{ id: 'step2', label: 'Step 2' },
			{ id: 'step3', label: 'Step 3' }
		],
		onClickStep: fn()
	}
};
