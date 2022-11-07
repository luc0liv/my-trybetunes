const checkForEmptyFields = (...fields) => {
  const isEmpty = fields.some((field) => field === '');
  return isEmpty;
};

const validateDisabledButton = (state) => {
  const {
    name,
    email,
    description,
    image,
  } = state;
  const emailRegex = /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  // Regex encontrado aqui:
  // https://www.abstractapi.com/guides/email-validation-regex-javascript
  const validEmail = emailRegex.test(email);
  const emptyFields = checkForEmptyFields(name, email, description, image);
  return emptyFields || !validEmail;
};

export default validateDisabledButton;
