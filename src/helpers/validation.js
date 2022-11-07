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
  const emptyFields = checkForEmptyFields(name, email, description, image);
  console.log(emptyFields);
  return emptyFields;
};

export default validateDisabledButton;
