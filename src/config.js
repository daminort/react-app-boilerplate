/**
 * If you need to change API url, you should create .env file in the root folder and
 * specify the next variables inside it (depends from current environment):
 * REACT_APP_PROD_API_URL
 * REACT_APP_DEV_API_URL
 *
 * For example:
 * REACT_APP_DEV_API_URL="http://localhost:8080/api/v1"
 *
 * If you don't specify environment variable application will use the current host for that
 * (with port and '/api/v1' tail in address):
 * API_URL = `${window.location.origin}/api/v1`;
 */

const isProduction = (process.env.NODE_ENV === 'production');

const envURL = isProduction
	? (process.env.REACT_APP_PROD_API_URL || '')
	: (process.env.REACT_APP_DEV_API_URL || '');

const originURL = `${window.location.origin}/api/v1`;

const API_URL = envURL || originURL;

export {
	isProduction,
	API_URL,
};
