import React, { useState } from 'react';
import validator from 'validator';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import Logo from '../../../../../../components/Logo';
import TextInput from '../../../../../../components/TextInput';

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

const StyledHR = styled.hr`
  border-top: 1px solid rgb(229 232 239);
  margin: 18px 0;
`;

const RegisterModal = ({
  open,
  onClose,
  onLogin,
}) => {
  const [email, setEmail] = useState({ value: '', touched: false });
  const [password, setPassword] = useState({ value: '', touched: false });
  const [confirmPassword, setConfirmPassword] = useState({ value: '', touched: false });

  const [touched, setTouched] = useState(false);

  return (
    <Modal open={open} onClose={onClose}>
      <LoginWrapper>
        <Header>
          <p>
            <StyledLogo />
          </p>
          <Title>Register</Title>
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
            <TextInput 
              error={(!confirmPassword.value || confirmPassword.value !== password.value) && (touched || confirmPassword.touched)} 
              value={confirmPassword.value} 
              onChange={(value) => setConfirmPassword({ value, touched: true })} 
              label="Confirm password" 
              type="password" 
              errorMessage={
                (!confirmPassword.value && 'Confirm password is required')
                || (confirmPassword !== password && 'Password does not match')
              }
            />
          </FormItem>
          <FormItem>
            <Button block>Register</Button>
          </FormItem>
        </Form>
        <StyledHR />
        <FormItem>
          <Button 
            block 
            variant="text"
            onClick={onLogin}
          >
            Having an account?
          </Button>
        </FormItem>
      </LoginWrapper>
    </Modal>
  );
};

export default RegisterModal;
