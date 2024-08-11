import styles from './Field.module.css';

type ErrorProps = {
	error?: string;
};

const Error: React.FC<ErrorProps> = ({ error }) =>
	error && (
		<div className={styles.error}>
			<span data-icon>!</span>
			<span>{error}</span>
		</div>
	);

export default Error;
