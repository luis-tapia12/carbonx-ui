import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Error from '../Form/Error';

import styles from './Input.module.css';

export type InputProps = {
	className?: string;
	disabled?: boolean;
	error?: string;
	id?: string;
	label?: string;
	name?: string;
	placeholder?: string;
	type?: 'text' | 'number' | 'password';
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ className, error, label, type = 'text', ...rest }) => (
	<div className={classNames({ [styles.inputError]: error })}>
		<label className={classNames(styles.inputContainer, className)}>
			{label && <span>{label}</span>}
			<input className={styles.input} type={type} {...rest} />
		</label>
		<Error error={error} />
	</div>
);

export default Input;
