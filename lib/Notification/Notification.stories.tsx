import { useContext } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Notification, { NotificationProps } from './Notification';
import NotificationProvider, { NotificationContext } from './NotificationContext';

const meta = {
	component: Notification
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

const NotificationComponent = (args: NotificationProps) => {
	return (
		<NotificationProvider>
			<NotificationWrapper {...args} />
		</NotificationProvider>
	);
};

const NotificationWrapper = (props: NotificationProps) => {
	const context = useContext(NotificationContext);

	const handleClick = () => {
		context.sendMessage(props);
	};

	return (
		<div>
			Send notification: <button onClick={handleClick}>Click Me!</button>
		</div>
	);
};

export const Default: Story = {
	render: NotificationComponent,
	args: {
		id: '',
		message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		variant: 'success'
	}
};

export const Variant: Story = {
	render: NotificationComponent,
	args: {
		id: '',
		message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		title: 'Title',
		variant: 'secondary'
	}
};
