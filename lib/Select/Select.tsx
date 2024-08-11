import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Error from '../Form/Error';

import styles from './Select.module.css';

export type Option = {
	id: string | number;
	label: string;
};

export type SelectProps = {
	className?: string;
	disabled?: boolean;
	error?: string;
	id?: string;
	label?: string;
	name?: string;
	options: Option[];
	placeholder?: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({
	className,
	error,
	label = '',
	options = [],
	placeholder,
	...rest
}) => (
	<div className={classNames({ [styles.selectError]: error })}>
		<label className={classNames(styles.selectContainer, className)}>
			{label && <span>{label}</span>}
			<select className={styles.select} {...rest}>
				{placeholder && (
					<option value="" disabled hidden>
						{placeholder}
					</option>
				)}
				{options.map((option, optionIndex) => (
					<option key={optionIndex} value={option.id}>
						{option.label}
					</option>
				))}
			</select>
		</label>
		<Error error={error} />
	</div>
);

export default Select;
