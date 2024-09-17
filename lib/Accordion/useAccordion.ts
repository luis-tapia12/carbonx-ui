import { useRef, useState } from 'react';

export const useAccordion = (initialState: boolean) => {
	const [show, setShow] = useState(initialState);
	const nodeRef = useRef<HTMLDivElement>(null!);

	const handleToggleShow = () => {
		setShow((prev) => !prev);
	};

	const onEntering = () => {
		nodeRef.current.style.maxHeight = `${nodeRef.current.scrollHeight}px`;
		nodeRef.current.style.borderBottomColor = 'var(--border-color)';
	};

	const onExiting = () => {
		nodeRef.current.style.maxHeight = '0';
		nodeRef.current.style.borderBottomColor = 'transparent';
	};

	return {
		nodeRef,
		show,
		handleToggleShow,
		onEntering,
		onExiting
	};
};
