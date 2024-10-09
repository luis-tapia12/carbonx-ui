import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useNotification } from './useNotification';
import type { Variant } from '../types';

import styles from './Notification.module.css';

export type NotificationProps = {
	id: string;
	title?: string;
	icon?: string;
	message: ReactNode;
	variant?: Variant;
};

const Notification: React.FC<NotificationProps> = (props) => {
	const { id, message, variant = 'success' } = props;
	const { close, renderIcon, renderTitle, time, onEnded, handleStop, handleStart } =
		useNotification(props);

	return (
		<div
			id={id}
			className={classNames(styles.notification, styles[variant], { [styles.close]: close })}
			onMouseEnter={handleStop}
			onMouseLeave={handleStart}
		>
			<div className={styles.body}>
				{renderIcon && (
					<div className={classNames(styles.icon, styles[variant])}>
						<i className={`fas fa-${renderIcon}`} />
					</div>
				)}
				<div className={styles.content}>
					<span className={styles.title}>{renderTitle} </span>
					<span className={styles.message}>{message}</span>
				</div>

				<button className={styles.closeButton} onClick={onEnded}>
					<i className="fas fa-xmark" />
				</button>
			</div>
			<div className={styles.timer} style={{ width: `${time}%` }}></div>
		</div>
	);
};

export default Notification;
