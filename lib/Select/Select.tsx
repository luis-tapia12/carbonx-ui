import classNames from 'classnames';
import styles from './Select.module.css';
import { ChangeEvent } from 'react';

export type Option = {
	id: string | number;
	label: string;
};

export type SelectProps = {
	className?: string;
	disabled?: boolean;
	id?: string;
	name?: string;
	options: Option[];
	placeholder?: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ className, options = [], placeholder, ...rest }) => {
	return (
		<select className={classNames(styles.select, className)} {...rest}>
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
	);
};

export default Select;
