import { MouseEvent } from 'react';
import classNames from 'classnames';

import styles from './Avatar.module.css';

import type { CSSDimension } from '../types';

export type AvatarProps = {
	bordered?: boolean;
	className?: string;
	name: string | string[];
	size?: CSSDimension;
	src?: string;
	onClick?: (event: MouseEvent) => void;
};

const calcFontSize = (size: CSSDimension) => `calc(${size} / 3)`;

const formatName = (name: string | string[]) => {
	const names = Array.isArray(name) ? name : name.split(' ');
	return names.map((word) => word.charAt(0));
};

const Avatar: React.FC<AvatarProps> = ({
	bordered,
	className,
	name,
	size = '50px',
	src,
	...rest
}) => {
	const style: React.CSSProperties = {
		fontSize: calcFontSize(size),
		height: size,
		width: size,
		lineHeight: size
	};

	if (src) {
		style.backgroundImage = `url(${src})`;
		style.color = 'transparent';
	}

	if (rest.onClick) {
		style.cursor = 'pointer';
	}

	return (
		<div
			className={classNames(styles.avatar, className, { [styles.bordered]: bordered })}
			style={style}
			{...rest}
		>
			{formatName(name)}
		</div>
	);
};

export default Avatar;
