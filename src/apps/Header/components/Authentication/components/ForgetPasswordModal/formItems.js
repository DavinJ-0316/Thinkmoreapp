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
}];

export default formItems;
