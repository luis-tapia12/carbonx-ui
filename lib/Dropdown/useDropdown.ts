import React from 'react';

export const useDropdown = () => {
	const [showMenu, setShowMenu] = React.useState(false);
	const menuRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef?.current?.parentElement?.contains(event.target as Node)
			) {
				setShowMenu(false);
			}
		};

		if (showMenu) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			if (showMenu) {
				document.removeEventListener('click', handleClickOutside);
			}
		};
	}, [showMenu]);

	const toggleShowMenu = () => {
		setShowMenu((prev) => !prev);
	};

	const handleClickItem = (onClick?: () => void) => () => {
		setShowMenu(false);
		onClick?.();
	};

	return {
		menuRef,
		showMenu,
		handleClickItem,
		toggleShowMenu
	};
};
