import React, { useState } from 'react';
import validator from 'validator';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import Logo from '../../../../../../components/Logo';
import TextInput from '../../../../../../components/TextInput';
import RegisterModal from '../RegisterModal';

const LoginWrapper = styled.div`
  padding: 0 64px;
`;

const StyledLogo = styled(Logo)`
  height: 55px;
`;

const Header = styled.div`
  text-align: center;
  margin: 32px 0;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Sub = styled.p`
  font-size: 0.875rem;
  color: rgb(101, 116, 139);
`;

const Form = styled.form`
`;

const FormItem = styled.div`
  margin-bottom: 24px;
`;

const SocialLogins = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledHR = styled.hr`
  border-top: 1px solid rgb(229 232 239);
  margin: 18px 0;
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
}) => {
  const [email, setEmail] = useState({ value: '', touched: false });
  const [password, setPassword] = useState({ value: '', touched: false });

  const [touched, setTouched] = useState(false);

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <LoginWrapper>
          <Header>
            <p>
              <StyledLogo />
            </p>
            <Title>Login</Title>
            <Sub>Where the Exploration Begins</Sub>
          </Header>
          <Form 
            onSubmit={(event) => {
              event.preventDefault();

              setTouched(true);

              console.log(email.value, password.value);
            }}
          >
            <FormItem>
              <TextInput 
                error={(!email.value || !validator.isEmail(email.value)) && (touched || email.touched)} 
                value={email.value} 
                onChange={(value) => setEmail({ value, touched: true })} 
                label="Email address" 
                errorMessage={
                  (!email.value && 'Email address is required') 
                  || (!validator.isEmail(email.value) && 'Must be a valid email address')
                }
              />
            </FormItem>
            <FormItem>
              <TextInput 
                error={!password.value && (touched || password.touched)} 
                value={password.value} 
                onChange={(value) => setPassword({ value, touched: true })} 
                label="Password" 
                type="password" 
                errorMessage="Password is required"
              />
            </FormItem>
            <FormItem>
              <Button block>Login</Button>
            </FormItem>
          </Form>
          <FormItem>
            <Button 
              block 
              variant="text" 
              onClick={onRegister}
            >
              Create a new account
            </Button>
          </FormItem>
          <StyledHR />
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
          <p>
            <Button variant="text">Forget your password?</Button>
          </p>
        </LoginWrapper>
      </Modal>
    </>
  );
};

export default LoginModal;
