import { ChangeEvent } from 'react';
import classNames from 'classnames';

import styles from './TextArea.module.css';

export type TextAreaProps = {
	className?: string;
	disabled?: boolean;
	id?: string;
	name?: string;
	placeholder?: string;
	value?: string | number;
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({ className, ...rest }) => {
	return <textarea className={classNames(styles.textarea, className)} {...rest} />;
};

export default TextArea;
