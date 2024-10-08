import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';
import { fn } from '@storybook/test';

const meta = {
	component: Sidebar,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<div style={{ padding: '1rem' }}>
				{new Array(20).fill(
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit perferendis
						dignissimos molestias eligendi ad voluptates? Officia minima architecto
						consectetur praesentium asperiores culpa, veritatis suscipit accusamus, quis
						ad voluptatum natus in?
					</p>
				)}
			</div>
		),
		topMenu: [
			{ active: true, icon: 'fas fa-chart-simple', label: 'Dashboard', onClick: fn() },
			{ icon: 'fas fa-person-running', label: 'Activity', onClick: fn() },
			{ icon: 'fas fa-list-check', label: 'Tasks', onClick: fn() }
		],
		bottomMenu: [
			{ icon: 'fas fa-chart-pie', label: 'Analythics', onClick: fn() },
			{ icon: 'fas fa-folder', label: 'Projects', onClick: fn() },
			{ icon: 'fas fa-gear', label: 'Settings', onClick: fn() }
		],
		logo: <i className="fas fa-circle" />,
		title: 'CarbonX'
	}
};
