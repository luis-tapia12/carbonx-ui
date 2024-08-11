import classNames from 'classnames';
import { Children, ReactElement, useEffect, useRef, useState } from 'react';

type Status = 'unmounted' | 'entering' | 'entered' | 'exiting' | 'exited';

type TransitionProps = {
	in: boolean;
	timeout: number;
	className?: string;
	classNames: any; // eslint-disable-line
	children: ReactElement;
};

const Transition: React.FC<TransitionProps> = ({
	classNames: transitionClassNames,
	className,
	children,
	in: inProp,
	timeout
}) => {
	const [status, setStatus] = useState<Status>(inProp ? 'entered' : 'unmounted');
	const firstRender = useRef(true);
	const nodeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!firstRender.current) {
			if (inProp) {
				setStatus('exited');
			} else {
				setStatus('exiting');
			}
		} else {
			firstRender.current = false;
		}
	}, [inProp]);

	useEffect(() => {
		if (inProp) {
			if (status === 'exited') {
				setStatus('entering');
				nodeRef.current?.scrollTop;
			} else if (status === 'entering') {
				setStatus('entered');
			}
		} else {
			if (status === 'exited') {
				setStatus('unmounted');
			} else if (status === 'exiting') {
				setTimeout(() => {
					setStatus('exited');
				}, timeout);
			}
		}
	}, [status]); // eslint-disable-line

	return (
		status !== 'unmounted' && (
			<div ref={nodeRef} className={classNames(className, transitionClassNames[status])}>
				{Children.only(children)}
			</div>
		)
	);
};

export default Transition;
