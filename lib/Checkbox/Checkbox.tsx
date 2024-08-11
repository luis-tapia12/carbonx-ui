import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Error from '../Form/Error';

import styles from './Checkbox.module.css';

export type CheckboxProps = {
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	error?: string;
	id?: string;
	label?: string;
	name?: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ className, error, label = '', ...rest }) => (
	<div className={classNames({ [styles.checkboxError]: error })}>
		<label
			className={classNames(styles.checkboxContainer, className, {
				[styles.disabled]: rest.disabled
			})}
		>
			<input className={styles.checkbox} type="checkbox" {...rest} />
			{label && <span>{label}</span>}
		</label>
		<Error error={error} />
	</div>
);

export default Checkbox;
