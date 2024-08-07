import React, { ReactNode } from 'react';

import Button from '../Button/Button';
import { useDropdown } from './useDropdown';

import styles from './Dropdown.module.css';
import classNames from 'classnames';

export type DropdownGroupProps = {
	items: DropdownItemProps[];
};

type DropdownItemWrapProps = DropdownItemProps & {
	handleClickItem: (onClick?: () => void) => () => void;
};

export type DropdownItemProps = {
	label: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
};

export type DropdownProps = {
	header?: ReactNode;
	groups?: DropdownGroupProps[];
	items?: DropdownItemProps[];
	label?: ReactNode;
	trigger?: ReactNode;
	alignment?: 'left' | 'right';
};

const DropdownItem: React.FC<DropdownItemWrapProps> = ({
	disabled,
	label,
	handleClickItem,
	onClick
}) => (
	<button className={styles.dropdownItem} disabled={disabled} onClick={handleClickItem(onClick)}>
		{label}
	</button>
);

const Dropdown: React.FC<DropdownProps> = ({
	alignment = 'left',
	groups,
	header,
	items,
	label,
	trigger
}) => {
	const { menuRef, showMenu, handleClickItem, toggleShowMenu } = useDropdown();

	const renderItems = (items: DropdownItemProps[]) =>
		items.map((item, itemIndex) => (
			<DropdownItem key={itemIndex} handleClickItem={handleClickItem} {...item} />
		));

	const renderTrigger = trigger ? (
		React.cloneElement(trigger as React.ReactElement, { onClick: toggleShowMenu })
	) : (
		<Button onClick={toggleShowMenu}>{label}</Button>
	);

	return (
		<div className={styles.dropdown}>
			{renderTrigger}
			{showMenu && (
				<div className={classNames(styles.dropdownMenu, styles[alignment])} ref={menuRef}>
					{header && <div className={styles.dropdownMenuHeader}>{header}</div>}
					{groups
						? groups.map((group, groupIndex) => (
								<div className={styles.dropdownGroup} key={groupIndex}>
									{renderItems(group.items)}
								</div>
							))
						: renderItems(items!)}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
