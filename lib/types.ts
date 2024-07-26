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
