import * as yup from 'yup';

class ValidatorUtils {

  static string(label) {
    return yup
      .string()
      .label(label)
      .strict(false)
      .trim();
  }

  static stringRequired(label) {
    return yup
      .string()
      .label(label)
      .strict(false)
      .trim()
      .required();
  }

  static arrayString(label) {
    return yup
      .array()
      .of(yup.string())
      .label(label);
  }

  static arrayStringRequired(label) {
    return yup
      .array()
      .of(yup.string())
      .label(label)
      .required();
  }

  static arrayObjectRequired(label) {
    return yup
      .array()
      .of(yup.object())
      .label(label)
      .required();
  }

  static confirm(field, label, message) {
    return yup
      .string()
      .label(label)
      .min(6)
      .max(255)
      .oneOf([yup.ref(field), null], message);
  }

  static passwordRequired(label = 'Password') {
    return yup
      .string()
      .label(label)
      .strict(false)
      .trim()
      .min(6)
      .max(255)
      .required();
  }

  static emailRequired(label = 'E-mail') {
    return yup
      .string()
      .label(label)
      .strict(false)
      .trim()
      .email()
      .required();
  }
}

export default ValidatorUtils;
export { ValidatorUtils };
