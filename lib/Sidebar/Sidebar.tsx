import classNames from 'classnames';
import styles from './Sidebar.module.css';
import { useSidebar } from './useSidebar';
import React, { ReactNode } from 'react';

type MenuItemProps = {
	active?: boolean;
	icon: string;
	label: ReactNode;
	onClick: () => void;
};

type SidebarProps = {
	children: ReactNode;
	topMenu?: MenuItemProps[];
	bottomMenu?: MenuItemProps[];
	logo: ReactNode;
	title: string;
};

const MenuItem: React.FC<MenuItemProps & { show: boolean }> = ({
	active,
	icon,
	label,
	show,
	onClick
}) => {
	return (
		<div onClick={onClick} className={classNames(styles.item, { [styles.active]: active })}>
			<i className={classNames(icon, styles.itemIcon)} />
			{show && <span>{label}</span>}
		</div>
	);
};

const Sidebar: React.FC<SidebarProps> = ({ children, topMenu, title, logo, bottomMenu }) => {
	const { show, handleToggleShow } = useSidebar(true);
	return (
		<div className={styles.sidebarRoot}>
			<div className={classNames(styles.sidebar, { [styles.show]: show })}>
				<div className={styles.trigger} onClick={handleToggleShow}>
					<div className={styles.itemIcon}>{logo}</div>
					{show && <div>{title}</div>}
				</div>
				<div className={styles.menu}>
					<div>
						{topMenu?.map((item, itemIndex) => (
							<MenuItem key={itemIndex} show={show} {...item} />
						))}
					</div>
					<div>
						{bottomMenu?.map((item, itemIndex) => (
							<MenuItem key={itemIndex} show={show} {...item} />
						))}
					</div>
				</div>
			</div>
			<div className={styles.root}>
				<div className={classNames(styles.header, { [styles.show]: show })}>
					<button className={styles.toggle} onClick={handleToggleShow}>
						<i className="fas fa-bars" />
					</button>
				</div>
				<div className={styles.content}>{children}</div>
			</div>
			{show && <div className={styles.backdrop}></div>}
		</div>
	);
};

export default Sidebar;
