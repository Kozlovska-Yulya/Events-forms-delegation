const emailInputElem = document.querySelector('email');
const passwordInputElem = document.querySelector('password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');
const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

const validatorsByfield = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

function validate(fieldName, value) {
  const validators = validatorsByfield[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
}

function onEmailChange(event) {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
}

function onPasswordChange(event) {
  const errorText = validate('password', event.target.value);
  emailErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);
