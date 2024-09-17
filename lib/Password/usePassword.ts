import { useState } from 'react';

export const usePassword = () => {
	const [show, setShow] = useState(false);

	const handleToggleShow = () => {
		setShow((prev) => !prev);
	};

	return {
		show,
		handleToggleShow
	};
};
