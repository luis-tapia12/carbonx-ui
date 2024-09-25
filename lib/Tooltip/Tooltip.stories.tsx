import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';
import Button from '../Button';
import { fn } from '@storybook/test';

const meta = {
	component: Tooltip,
	argTypes: {
		position: {
			options: ['top', 'bottom', 'left', 'right'],
			control: { type: 'radio' }
		}
	}
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <Button onClick={fn()}>Hover me</Button>,
		tooltip: 'Lorem ipsum dolor.',
		position: 'bottom'
	}
};
