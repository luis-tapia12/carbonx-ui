import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { fn } from '@storybook/test';
import { useState } from 'react';
import Button from '../Button';

const meta = {
	component: Modal,
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', 'xl'],
			control: { type: 'radio' }
		}
	}
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const [show, setShow] = useState(args.show);

		const handleClose = () => {
			setShow((prev) => !prev);
		};

		return (
			<>
				<Button onClick={handleClose}>Open modal</Button>
				<Modal {...args} show={show} onClose={handleClose}>
					{args.children}
				</Modal>
			</>
		);
	},
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ea magni, a repellendus recusandae, modi hic est sequi ut quisquam, ipsa aliquid laboriosam aut eligendi molestias natus dolore iure suscipit!',
		size: 'md',
		show: true,
		title: 'Title',
		onClose: fn()
	}
};
