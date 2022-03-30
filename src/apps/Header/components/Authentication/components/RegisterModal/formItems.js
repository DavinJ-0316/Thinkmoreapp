import validator from 'validator';

const formItems = [{
  key: 'emailAddress',
  label: 'Email address',
  validators: [{
    validation: (value) => !validator.isEmpty(value),
    message: 'Email address is required',
  }, {
    validation: (value) => validator.isEmail(value),
    message: 'Must be a valid email address'
  }],
}, {
  key: 'password',
  label: 'Password',
  type: 'password',
  validators: [{
    validation: (value) => !validator.isEmpty(value),
    message: 'Password is required',
  }],
}, {
  key: 'confirmPassword',
  label: 'Confirm password',
  type: 'password',
  validators: [{
    validation: (value) => !validator.isEmpty(value),
    message: 'Password is required',
  }, {
    validation: (value, data) => value === data.password.value,
    message: 'Password does not match',
  }],
}];

export default formItems;
