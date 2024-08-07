import { ReactNode } from 'react';

import styles from './Card.module.css';
import classNames from 'classnames';

export type CardProps = {
	children?: ReactNode;
	className?: string;
	title?: ReactNode;
};

const Card: React.FC<CardProps> = ({ children, className, title }) => (
	<div className={classNames(styles.card, className)}>
		{!!title && <div className={styles.cardTitle}>{title}</div>}
		<div className={styles.cardBody}>{children}</div>
	</div>
);

export default Card;
