import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

const meta = {
	component: Table
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		columns: {
			id: {
				label: (
					<>
						<input type="checkbox" /> Id
					</>
				),
				render: () => <input type="checkbox" />
			},
			col1: 'Col1',
			col2: 'Col2',
			col3: 'Col3',
			col4: 'Col4',
			col5: 'Col5',
			col6: 'Col6'
		},
		data: new Array(10).fill({}).map((_, index) => ({
			id: index,
			col1: `Data${index}1`,
			col2: `Data${index}2`,
			col3: `Data${index}3`,
			col4: `Data${index}4`,
			col5: `Data${index}5`,
			col6: `Data${index}6`
		}))
	}
};

export const WithSort: Story = {
	args: {
		columns: {
			id: {
				label: (
					<>
						<input type="checkbox" /> Id
					</>
				),
				render: () => <input type="checkbox" />
			},
			col1: 'Col1',
			col2: 'Col2',
			col3: 'Col3',
			col4: 'Col4',
			col5: 'Col5',
			col6: 'Col6'
		},
		data: new Array(10).fill({}).map((_, index) => ({
			id: index,
			col1: `Data${index}1`,
			col2: `Data${index}2`,
			col3: `Data${index}3`,
			col4: `Data${index}4`,
			col5: `Data${index}5`,
			col6: `Data${index}6`
		})),
		sortable: true
	}
};
