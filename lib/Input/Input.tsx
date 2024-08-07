import { ChangeEvent } from 'react';
import styles from './Input.module.css';
import classNames from 'classnames';

export type InputProps = {
	className?: string;
	disabled?: boolean;
	id?: string;
	name?: string;
	placeholder?: string;
	type?: 'text' | 'number' | 'password';
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ className, type = 'text', ...rest }) => {
	return <input className={classNames(styles.input, className)} type={type} {...rest} />;
};

export default Input;
