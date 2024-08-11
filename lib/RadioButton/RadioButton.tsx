import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Error from '../Form/Error';

import styles from './RadioButton.module.css';

export type RadioButtonProps = {
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

const RadioButton: React.FC<RadioButtonProps> = ({ className, error, label = '', ...rest }) => (
	<div className={classNames({ [styles.radioError]: error })}>
		<label
			className={classNames(styles.radioContainer, className, {
				[styles.disabled]: rest.disabled
			})}
		>
			<input className={styles.radio} type="radio" {...rest} />
			{label && <span>{label}</span>}
		</label>
		<Error error={error} />
	</div>
);

export default RadioButton;
