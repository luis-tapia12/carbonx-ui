import { MouseEvent, ReactNode } from 'react';
import classNames from 'classnames';

import Card from '../Card/Card';
import Transition from '../Transition';

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
	const modalTitle = (
		<div className={styles.modalTitle}>
			{title}
			<button onClick={onClose}>
				<img src={closeIcon} />
			</button>
		</div>
	);

	return (
		<Transition in={show} timeout={400} classNames={styles} className={styles.modalContainer}>
			<Card className={classNames(styles.modal, styles[size])} title={modalTitle}>
				{children}
			</Card>
		</Transition>
	);
};

export default Modal;
