import type { Meta, StoryObj } from '@storybook/react';

import Transition from './Transition';
import './Transition.css';

const meta = {
	component: Transition
} satisfies Meta<typeof Transition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		in: false,
		timeout: 300,
		classNames: {
			entered: 'entered',
			entering: 'entering',
			exited: 'exited',
			exiting: 'exiting'
		},
		children: <div>Transition</div>
	}
};
