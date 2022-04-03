import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import styled from 'styled-components';
import signIn from '../../../../../../apis/signIn';
import Alert from '../../../../../../components/Alert';
import Button from '../../../../../../components/Button';
import Form from '../../../../../../components/Form';
import FormItem from '../../../../../../components/FormItem';
import HorizontalRule from '../../../../../../components/HorizontalRule';
import useAlert from '../../../../../../hooks/useAlert';
import useForm from '../../../../../../hooks/useForm';
import AuthenticationModal from '../../../../../AuthenticationModal';
import formItems from './formItems';
import useRememberPassword from './hooks/useRememberPassword';

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

const RememberPassword = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const LoginModal = ({
  onClose,
  onRegister,
  onForgetPassword,
  onUser,
}) => {
  const { rememberedPassword, rememberPassword, setRememberPassword, onRememberPassword } = useRememberPassword()
  const { valid, data, setData, touched, setTouched } = useForm(formItems, rememberedPassword ? JSON.parse(rememberedPassword) : {});
  const [loading, setLoading] = useState(false);
  const { alert, setAlert } = useAlert();

  return (
    <>
      <AuthenticationModal 
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
            setLoading(true);

            try {
              const user = await signIn(data.emailAddress.value, data.password.value)

              onUser(user);

              onRememberPassword({
                emailAddress: data.emailAddress.value,
                password: data.password.value,
              })
            } catch(error) {
              if (error.response?.status === 404) {
                setAlert('Invalid email address or password');

                return;
              }

              setAlert('Internal server error, please try again later');
            }

            setLoading(false)
          }}
        >
          <FormItem>
            <RememberPassword>
              <input 
                type="checkbox" 
                checked={rememberPassword} 
                onChange={(event) => {
                  setRememberPassword(event.target.checked);
                }} 
              />
              Remember password
            </RememberPassword>
          </FormItem>
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
      {alert && <Alert>{alert}</Alert>}
    </>
  );
};

export default LoginModal;
