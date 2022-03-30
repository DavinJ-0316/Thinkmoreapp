import validator from 'validator';

const formItems = [{
  key: 'emailAddress',
  label: 'Email address',
  validators: [{
    validation: (value) => !validator.isEmpty(value),
    message: 'Email address is required',
  }],
}, {
  key: 'password',
  label: 'Password',
  type: 'password',
  validators: [{
    validation: (value) => !validator.isEmpty(value),
    message: 'Password is required',
  }],
}];

export default formItems;
