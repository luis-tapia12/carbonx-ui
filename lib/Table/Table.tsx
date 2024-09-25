import { ReactNode } from 'react';
import classNames from 'classnames';

import { Sort, useTable } from './useTable';
import { Data } from '../types';

import styles from './Table.module.css';
import arrow from '../assets/arrow.png';

type Column = {
	label: ReactNode;
	render?: (row: Data) => ReactNode;
};

type TableProps = {
	columns: Record<string, string | Column>;
	data: Data[];
	sortable?: boolean;
	initialSort?: Sort;
	onChangeSort?: (sort: Sort) => void;
};

const Table: React.FC<TableProps> = ({ columns, data, initialSort, sortable, onChangeSort }) => {
	const { sort, handleClickColumn } = useTable(initialSort, onChangeSort);
	const columnKeys = Object.keys(columns);

	return (
		<table className={styles.table}>
			<thead className={classNames({ [styles.sortable]: sortable })}>
				<tr>
					{columnKeys.map((column, colIndex) => (
						<th key={colIndex} onClick={handleClickColumn.bind(this, column)}>
							{(columns[column] as Column).label || (columns[column] as string)}
							{sortable && (
								<img
									className={classNames(styles.sortIcon, {
										[styles.asc]: sort?.direction === 'ASC',
										[styles.selected]: column === sort?.column
									})}
									src={arrow}
									alt="^"
								/>
							)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columnKeys.map((column, colIndex) => (
							<td key={colIndex}>
								{(columns[column] as Column)?.render?.(row) || row[column]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
