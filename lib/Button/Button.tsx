import { MouseEvent, ReactNode } from 'react';

import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonProps = {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	onClick: (event: MouseEvent) => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			{children}
		</button>
	);
};

export default Button;
