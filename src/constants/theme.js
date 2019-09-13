import { ThemeUtils } from '../utils/ThemeUtils';

const colors = {
	// absolute
	white: '#ffffff',
	black: '#000000',
	gray: '#c7c7c7',
	// named
	dark: '#444444',
	ghost: '#919191',
	error: '#d32f2f',
	warning: '#ffa000',
	info: '#1976d1',
	success: '#43a047',
};

export const THEME = {
	colors: {
		...colors,
	},
	text: {
		main: colors.dark,
		second: colors.ghost,
		invert: colors.white,
		error: colors.error,
		warning: colors.warning,
		info: colors.info,
		success: colors.success,
	},
	border: {
		button: ThemeUtils.lighter(colors.info),
		input: colors.gray,
		inputError: colors.error,
	},
	bg: {
		button: ThemeUtils.lightest(colors.info),
		input: colors.white,
		inputError: ThemeUtils.lightest(colors.error),
		header: ThemeUtils.lighter(colors.info),
		footer: ThemeUtils.darkest(colors.dark),
	},
	height: {
		header: 48,
		footer: 32,
	}
};
