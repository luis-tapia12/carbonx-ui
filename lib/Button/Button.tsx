import { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';

import type { Variant } from '../types';

import styles from './Button.module.css';

type ButtonProps = {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	variant?: Variant;
	onClick: (event: MouseEvent) => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => (
	<button className={classNames(styles.button, className, styles[variant])} {...props}>
		{children}
	</button>
);

export default Button;
