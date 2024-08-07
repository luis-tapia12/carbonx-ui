import { ChangeEvent } from 'react';

import styles from './Checkbox.module.css';
import classNames from 'classnames';

export type CheckboxProps = {
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	name?: string;
	value?: string | number;
	label?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ className, label = '', ...rest }) => {
	return (
		<div
			className={classNames(styles.checkboxContainer, className, {
				[styles.disabled]: rest.disabled
			})}
		>
			<input className={styles.checkbox} type="checkbox" {...rest} />
			{label && <span>{label}</span>}
		</div>
	);
};

export default Checkbox;
