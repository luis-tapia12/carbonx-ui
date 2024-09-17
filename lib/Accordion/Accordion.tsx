import { ReactNode } from 'react';
import classNames from 'classnames';

import { useAccordion } from './useAccordion';

import styles from './Accordion.module.css';
import arrow from '../assets/arrow.png';
import { Transition } from 'react-transition-group';

type AccordionProps = {
	children: ReactNode;
	className?: string;
	title: string;
	opened?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ children, className, opened = false, title }) => {
	const { nodeRef, show, handleToggleShow, ...transitionProps } = useAccordion(opened);

	return (
		<div className={classNames(styles.acordion, className)}>
			<div
				className={classNames(styles.acordionTitle, { [styles.hidden]: show })}
				onClick={handleToggleShow}
			>
				<span>{title}</span>
				<img src={arrow} />
			</div>
			<Transition in={show} timeout={300} nodeRef={nodeRef} {...transitionProps}>
				<div ref={nodeRef} className={styles.acordionBody}>
					{children}
				</div>
			</Transition>
		</div>
	);
};

export default Accordion;
