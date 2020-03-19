import * as yup from 'yup';
import { ValidatorUtils as Utils } from '../ValidatorUtils';

export const loginSchema = yup.object().shape({
	email: Utils.emailRequired(),
	password: Utils.passwordRequired(),
});
