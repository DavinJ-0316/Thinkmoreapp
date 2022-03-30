import { useState } from "react";

const useForm = (formItems) => {
  const initialData = formItems.reduce((acc, cur) => {
    const { key } = cur;

    return {
      ...acc,
      [key]: { value: '', touched: false }
    }
  }, {});


  const [data, setData] = useState(initialData);

  const [touched, setTouched] = useState(false);

  const valid = !formItems.find(({ 
    key, 
    validators,
  }) => validators.find(({ validation }) => !validation(data[key].value, data)))

  return {
    data,
    setData,
    touched,
    setTouched,
    valid,
  }
} 

export default useForm;
