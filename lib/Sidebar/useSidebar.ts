import { useState } from 'react';

export const useSidebar = (initialShow: boolean) => {
	const [show, setShow] = useState(initialShow);

	const handleToggleShow = () => {
		setShow((prev) => !prev);
	};

	return {
		show,
		handleToggleShow
	};
};
