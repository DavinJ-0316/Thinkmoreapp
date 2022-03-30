import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import styled from 'styled-components';
import signIn from '../../../../../../apis/signIn';
import Button from '../../../../../../components/Button';
import Form from '../../../../../../components/Form';
import FormItem from '../../../../../../components/FormItem';
import HorizontalRule from '../../../../../../components/HorizontalRule';
import useForm from '../../../../../../hooks/useForm';
import AuthenticationModal from '../../../../../AuthenticationModal';
import formItems from './formItems';

const SocialLogins = styled(FormItem)`
  display: flex;
  justify-content: space-between;
`;

const SocialLoginButton = styled(Button)`
  width: calc(50% - 16px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const LoginModal = ({
  open,
  onClose,
  onRegister,
  onForgetPassword,
  setUser,
}) => {
  const { valid, data, setData, touched, setTouched } = useForm(formItems);
  const [loading, setLoading] = useState(false);

  return (
    <AuthenticationModal 
      open={open}
      onClose={onClose}
      title="Login"
    >
      <Form
        formItems={formItems}
        data={data}
        setData={setData}
        touched={touched}
        setTouched={setTouched}
        onSubmit={async () => {
          setLoading(true)

          try {
            const user = await signIn(data.emailAddress.value, data.password.value)

            setUser(user);
          } catch(error) {

          }

          setLoading(false)
        }}
      >
        <FormItem>
          <Button disabled={!valid || loading} block>Login</Button>
        </FormItem>
      </Form>
      <FormItem>
        <Button block variant="text" onClick={onRegister}>
          Create a new account
        </Button>
      </FormItem>
      <HorizontalRule />
      <SocialLogins>
        <SocialLoginButton variant="facebook">
          <FaFacebook />
          Login with Facebook
        </SocialLoginButton>
        <SocialLoginButton variant="google">
          <FaGoogle />
          Login with Google
        </SocialLoginButton>
      </SocialLogins>
      <FormItem>
        <Button block variant="text" onClick={onForgetPassword}>
          Forget your password?
        </Button>
      </FormItem>
    </AuthenticationModal>
  );
};

export default LoginModal;
