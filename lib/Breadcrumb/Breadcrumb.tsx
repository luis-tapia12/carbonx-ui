import { ReactNode } from 'react';
import classNames from 'classnames';

import home from '../assets/home.png';
import arrow from '../assets/right.png';
import styles from './Breadcrumb.module.css';

type Step = {
	id: string;
	label: ReactNode;
};

type BreadcrumbProps = {
	className?: string;
	home?: string;
	steps: (Step | string)[];
	onClickStep?: (id: string) => void;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
	className,
	home: homeStep,
	steps,
	onClickStep
}) => {
	const nextSteps = homeStep
		? [{ id: homeStep, label: <img className={styles.home} src={home} /> }, ...steps]
		: steps;

	return (
		<div className={classNames(styles.breadcrumb, className)}>
			{nextSteps.map((step, stepIndex) => (
				<>
					<span
						className={classNames({ [styles.step]: onClickStep })}
						key={stepIndex}
						onClick={onClickStep?.bind(this, (step as Step).id || (step as string))}
					>
						{(step as Step).label || new String(step)}
					</span>
					{stepIndex + 1 !== nextSteps.length && (
						<img className={styles.arrow} src={arrow} alt="arrow" />
					)}
				</>
			))}
		</div>
	);
};

export default Breadcrumb;
