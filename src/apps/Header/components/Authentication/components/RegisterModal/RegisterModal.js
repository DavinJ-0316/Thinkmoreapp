import React, { useState } from 'react';
import Button from '../../../../../../components/Button';
import Form from '../../../../../../components/Form';
import FormItem from '../../../../../../components/FormItem';
import HorizontalRule from '../../../../../../components/HorizontalRule';
import useForm from '../../../../../../hooks/useForm';
import AuthenticationModal from '../../../../../AuthenticationModal';
import formItems from './formItems';
import signUp from '../../../../../../apis/signUp'; 

const RegisterModal = ({
  open,
  onClose,
  onLogin,
  setUser,
}) => {
  const { valid, data, setData, touched, setTouched } = useForm(formItems);
  const [loading, setLoading] = useState(false);

  return (
    <AuthenticationModal
      open={open}
      onClose={onClose}
      title="Register"
    >
      <Form
        formItems={formItems}
        data={data}
        setData={setData}
        touched={touched}
        setTouched={setTouched}
        onSubmit={async () => {
          setLoading(true);
          
          const user = await signUp(data.emailAddress.value, data.password.value);
          setUser(user)

          setLoading(false)
        }}
      >
        <FormItem>
          <Button disabled={!valid || loading} block>Register</Button>
        </FormItem>
      </Form>
      <HorizontalRule />
      <FormItem>
        <Button block variant="text" onClick={onLogin}>
          Having an account?
        </Button>
      </FormItem>
    </AuthenticationModal>
  );
};

export default RegisterModal;
