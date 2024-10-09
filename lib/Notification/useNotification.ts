import { useEffect, useState } from 'react';
import { useNotificationContext } from './useNotificationContext';
import { NotificationProps } from './Notification';

const types = {
	primary: null,
	secondary: null,
	success: { title: 'Success', icon: 'circle-check' },
	error: { title: 'Error', icon: 'circle-xmark' },
	warn: { title: 'Warning', icon: 'triangle-exclamation' },
	info: { title: 'Info', icon: 'circle-info' }
};

export const useNotification = ({ id, icon, title, variant = 'success' }: NotificationProps) => {
	const { dropMessage } = useNotificationContext();

	const [time, setTime] = useState(0);
	const [close, setClose] = useState(false);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout>(null!);

	const handleStart = () => {
		const interval = setInterval(() => {
			setTime((prev) => {
				if (prev < 100) {
					return prev + 0.25;
				}
				clearInterval(interval);
				return prev;
			});
		}, 20);

		setIntervalId(interval);
	};

	const handleStop = () => {
		clearInterval(intervalId);
	};

	const onEnded = () => {
		setClose(true);
		handleStop();
		setTimeout(() => {
			dropMessage(id);
		}, 500);
	};

	useEffect(() => {
		if (time === 100) {
			onEnded();
		}
	}, [time]); // eslint-disable-line

	useEffect(() => {
		handleStart();
	}, []);

	const renderIcon = icon || types[variant]?.icon;
	const renderTitle = title || types[variant]?.title;

	return { close, renderIcon, renderTitle, time, onEnded, handleStop, handleStart };
};
