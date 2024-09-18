export type CSSUnit =
	| 'px'
	| 'em'
	| 'rem'
	| 'vw'
	| 'vh'
	| '%'
	| 'pt'
	| 'cm'
	| 'mm'
	| 'in'
	| 'ex'
	| 'ch';

export type CSSDimension = `${number}${CSSUnit}`;

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'primary' | 'secondary' | 'success' | 'error' | 'warn' | 'info';

export type Position = 'top' | 'bottom' | 'left' | 'right';
