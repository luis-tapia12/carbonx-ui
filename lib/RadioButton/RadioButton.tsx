import { ChangeEvent } from 'react';
import classNames from 'classnames';

import styles from './RadioButton.module.css';

export type RadioButtonProps = {
	className?: string;
	disabled?: boolean;
	id?: string;
	name?: string;
	label?: string;
	value?: string | number;
	checked?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ className, label, ...rest }) => {
	return (
		<div className={classNames(styles.radioContainer, className)}>
			<input className={styles.radio} type="radio" {...rest} />
			{label && <span>{label}</span>}
		</div>
	);
};

export default RadioButton;
