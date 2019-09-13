const isProduction = (process.env.NODE_ENV === 'production');

const API_URL = isProduction
	? process.env.REACT_APP_PROD_API_URL
	: process.env.REACT_APP_DEV_API_URL;

export {
	isProduction,
	API_URL,
};
