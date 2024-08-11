import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Error from '../Form/Error';

import styles from './Switch.module.css';

export type SwitchProps = {
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

const Switch: React.FC<SwitchProps> = ({ className, error, label, ...rest }) => (
	<div className={classNames({ [styles.switchError]: error })}>
		<label
			className={classNames(styles.switch, className, {
				[styles.disabled]: rest.disabled
			})}
		>
			<input type="checkbox" {...rest} />
			<span className={styles.control}></span>
			{label && <span>{label}</span>}
		</label>
		<Error error={error} />
	</div>
);

export default Switch;
