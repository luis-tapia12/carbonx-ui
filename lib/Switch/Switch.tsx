import { ChangeEvent } from 'react';
import classNames from 'classnames';

import styles from './Switch.module.css';

export type SwitchProps = {
	checked?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	name?: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Switch: React.FC<SwitchProps> = ({ className, ...rest }) => {
	const { checked, disabled } = rest;

	return (
		<div
			className={classNames(styles.switch, className, {
				[styles.active]: checked,
				[styles.disabled]: disabled
			})}
		>
			<input type="checkbox" {...rest} />
		</div>
	);
};

export default Switch;
