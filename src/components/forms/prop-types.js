import * as PropTypes from 'prop-types';

export const propTypes = {
	noMargin : PropTypes.bool,

	field: PropTypes.shape({
		name     : PropTypes.string.isRequired,
		value    : PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
		onChange : PropTypes.func,
		onBlur   : PropTypes.func,
	}),

	form: PropTypes.shape({
		touched  : PropTypes.object,
		errors   : PropTypes.object,
	}),
};

export const defaultProps = {
	noMargin : false,

	field: {
		value: '',
	},

	form: {
		touched : {},
		errors  : {},
	},
};
