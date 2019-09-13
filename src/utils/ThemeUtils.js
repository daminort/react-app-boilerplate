class ThemeUtils {

	// convert HEX to RGBA (A - opacity)
	// source: https://css-tricks.com/converting-color-spaces-in-javascript/
	static hexToRGBA(hex, a = 1) {
		let r = 0;
		let g = 0;
		let b = 0;

		// 3 digits
		if (hex.length === 4) {
			r = `0x${hex[1]}${hex[1]}`;
			g = `0x${hex[2]}${hex[2]}`;
			b = `0x${hex[3]}${hex[3]}`;

			// 6 digits
		} else if (hex.length === 7) {
			r = `0x${hex[1]}${hex[2]}`;
			g = `0x${hex[3]}${hex[4]}`;
			b = `0x${hex[5]}${hex[6]}`;
		}

		return `rgba(${+r}, ${+g}, ${+b}, ${+a})`;
	}

	// Makes HEX color lighter or darker
	// lum — the luminosity factor, i.e. -0.1 is 10% darker, 0.2 is 20% lighter, etc.
	// source: https://www.sitepoint.com/javascript-generate-lighter-darker-color/
	static luminance(hex, lum = 0) {

		// validate hex string
		let h = String(hex).replace(/[^0-9a-f]/gi, '');
		if (h.length < 6) {
			h = `${h[0]}${h[0]}${h[1]}${h[1]}${h[2]}${h[2]}`;
		}

		// convert to decimal and change luminosity
		let rgb = '#';
		let c = 0;
		for (let i = 0; i < 3; i++) {
			c = parseInt(h.substr(i * 2, 2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += (`00${c}`).substr(c.length);
		}

		return rgb;
	}

	static lighter(hex) {
		return ThemeUtils.luminance(hex, 0.2);
	}

	static lightest(hex) {
		return ThemeUtils.luminance(hex, 0.5);
	}

	static darker(hex) {
		return ThemeUtils.luminance(hex, -0.2);
	}

	static darkest(hex) {
		return ThemeUtils.luminance(hex, -0.5);
	}
};

export default ThemeUtils;
export { ThemeUtils };
