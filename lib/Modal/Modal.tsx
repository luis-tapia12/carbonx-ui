import { MouseEvent, ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import Card from '../Card/Card';

import closeIcon from '../assets/close-icon.png';
import styles from './Modal.module.css';
import type { Size } from '../types';

export type ModalProps = {
	show: boolean;
	children: ReactNode;
	size?: Size;
	title?: ReactNode;
	onClose: (event: MouseEvent) => void;
};

const Modal: React.FC<ModalProps> = ({ children, size = 'md', show, title, onClose }) => {
	const nodeRef = useRef<HTMLDivElement>(null!);
	const modalTitle = (
		<div className={styles.modalTitle}>
			{title}
			<button onClick={onClose}>
				<img src={closeIcon} />
			</button>
		</div>
	);

	return (
		<CSSTransition
			in={show}
			timeout={400}
			classNames={{
				enter: styles.entering,
				enterActive: styles.entered,
				exit: styles.exiting,
				exitActive: styles.exited
			}}
			nodeRef={nodeRef}
			unmountOnExit
		>
			<div className={styles.modalContainer} ref={nodeRef}>
				<Card className={classNames(styles.modal, styles[size])} title={modalTitle}>
					{children}
				</Card>
			</div>
		</CSSTransition>
	);
};

export default Modal;
