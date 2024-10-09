import React, { createContext, ReactNode, useState } from 'react';
import Notification, { NotificationProps } from './Notification';

import styles from './Notification.module.css';

type NotificationProviderProps = {
	children: ReactNode;
};

type NotificationState = {
	sendMessage: (notification: Omit<NotificationProps, 'id'>) => Promise<void>;
	dropMessage: (id: string) => void;
};

export const NotificationContext = createContext<NotificationState>(null!);

const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
	const [notifications, setNotifications] = useState<NotificationProps[]>([]);

	const sendMessage = (notification: Omit<NotificationProps, 'id'>): Promise<void> => {
		const id = Date.now().toString();
		return new Promise((resolve) => {
			setNotifications((prev) => [...prev, { ...notification, id }]);
			resolve();
		});
	};

	const dropMessage = (id: string) => {
		setNotifications((prev) => prev.filter((notification) => notification.id !== id));
	};

	return (
		<NotificationContext.Provider value={{ dropMessage, sendMessage }}>
			<div className={styles.container}>
				{notifications.map((notificacion) => (
					<Notification {...notificacion} key={notificacion.id} />
				))}
			</div>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationProvider;
