import { useState } from 'react';

type Direction = 'ASC' | 'DESC';

export type Sort = {
	column: string;
	direction: Direction;
};

export const useTable = (initialSort?: Sort, onChangeSort?: (sort: Sort) => void) => {
	const [sort, setSort] = useState(initialSort);

	const handleClickColumn = (column: string) => {
		setSort((prev) => {
			const nextSort: Sort = {
				column,
				direction: prev?.direction === 'ASC' && prev?.column === column ? 'DESC' : 'ASC'
			};

			onChangeSort?.(nextSort);

			return nextSort;
		});
	};

	return {
		sort,
		handleClickColumn
	};
};
