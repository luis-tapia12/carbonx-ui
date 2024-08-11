import { ChangeEvent } from 'react';
import classNames from 'classnames';

import Error from '../Form/Error';

import styles from './TextArea.module.css';

export type TextAreaProps = {
	className?: string;
	disabled?: boolean;
	error?: string;
	id?: string;
	label?: string;
	name?: string;
	placeholder?: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({ className, error, label, ...rest }) => (
	<div className={classNames({ [styles.textareaError]: error })}>
		<label className={classNames(styles.textareaContainer, className)}>
			{label && <span>{label}</span>}
			<textarea className={styles.textarea} {...rest} />
		</label>
		<Error error={error} />
	</div>
);

export default TextArea;
