import { ReactNode } from 'react';

import styles from './Tooltip.module.css';
import classNames from 'classnames';
import type { Position } from '../types';

type TooltipProps = {
	className?: string;
	children: ReactNode;
	position?: Position;
	tooltip: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ className, children, position = 'top', tooltip }) => (
	<div className={styles.tooltipContainer}>
		{children}
		<div className={classNames(styles.tooltip, className, styles[position])}>{tooltip}</div>
	</div>
);

export default Tooltip;
