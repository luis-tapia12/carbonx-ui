import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Spinner.module.css';
import classNames from 'classnames';

type SpinnerProps = {
	show: boolean;
	secondary?: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ show, secondary }) => {
	const nodeRef = useRef(null);

	return (
		<CSSTransition classNames={styles} in={show} timeout={700} nodeRef={nodeRef} unmountOnExit>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="250"
				height="250"
				fill="none"
				ref={nodeRef}
				className={classNames(styles.spinner, { [styles.secondary]: secondary })}
			>
				<rect
					rx="25"
					width="150"
					height="50"
					x="50"
					y="-25"
					fill="black"
					transform="rotate(45)"
				/>
				<rect
					rx="25"
					width="150"
					height="50"
					x="-125"
					y="150"
					fill="black"
					transform="rotate(-45)"
				/>
				<rect
					rx="25"
					width="85"
					height="50"
					x="-125"
					y="-200"
					fill="black"
					transform="rotate(135)"
				/>
				<rect
					rx="25"
					width="85"
					height="50"
					x="-300"
					y="-25"
					fill="black"
					transform="rotate(225)"
				/>
			</svg>
		</CSSTransition>
	);
};

export default Spinner;
