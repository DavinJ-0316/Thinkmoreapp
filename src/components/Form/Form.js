import React from 'react';
import TextInput from '../TextInput';
import FormItem from '../FormItem';

const Form = ({
  formItems,
  data,
  setData,
  touched,
  setTouched,
  children,
  onSubmit,
}) => (
  <form 
    onSubmit={(event) => {
      event.preventDefault();

      setTouched(true);

      onSubmit()
    }}
  >
    {formItems.map(({
      type,
      key,
      label,
      validators,
    }) => {
      const showError = touched || data[key].touched;
      const invalid = validators.find(({ validation }) => !validation(data[key].value, data))

      return (
        <FormItem key={key}>
          <TextInput
            type={type}
            label={label} 
            value={data[key].value} 
            onChange={(value) => setData((prevData) => ({
              ...prevData,
              [key]: {
                value,
                touched: true,
              }
            }))} 
            error={invalid && showError} 
            errorMessage={invalid?.message}
          />
        </FormItem>
      )
    })}
    {children}
  </form>
)

export default Form
