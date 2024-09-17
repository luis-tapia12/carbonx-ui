import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Error from '../Form/Error';
import { usePassword } from './usePassword';

import eye from '../assets/eye.png';
import styles from './Password.module.css';

export type PasswordProps = {
	className?: string;
	disabled?: boolean;
	error?: string;
	id?: string;
	label?: string;
	name?: string;
	placeholder?: string;
	value?: string | number;
	visible?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Password: React.FC<PasswordProps> = ({ className, error, label, visible, ...rest }) => {
	const { show, handleToggleShow } = usePassword();
	return (
		<div className={classNames({ [styles.inputError]: error })}>
			<label className={classNames(styles.inputContainer, className)}>
				{label && <span>{label}</span>}
				<input
					className={classNames(styles.input, { [styles.visible]: visible })}
					type={show ? 'text' : 'password'}
					{...rest}
				/>
				{visible && (
					<button
						className={classNames(styles.toggle, { [styles.visible]: show })}
						onClick={handleToggleShow}
					>
						<img src={eye} alt="eye" />
					</button>
				)}
			</label>
			<Error error={error} />
		</div>
	);
};

export default Password;
