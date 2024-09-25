import { ReactNode } from 'react';
import classNames from 'classnames';

import type { Variant } from '../types';

import styles from './Badge.module.css';

export type BadgeProps = {
	children: ReactNode;
	className?: string;
	variant?: Variant;
};

const Badge: React.FC<BadgeProps> = ({ children, className, variant = 'primary' }) => (
	<span className={classNames(styles.badge, className, styles[variant])}>{children}</span>
);

export default Badge;
