import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import { useUser } from '../../../../contexts/UserContext';
import ForgetPasswordModal from './components/ForgetPasswordModal';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import UserMenu from './components/UserMenu';

const StyledButton = styled(Button)`
  & ~ & {
    margin-left: 1rem;
  }
`;

const Authentication = () => {
  const [modal, setModal] = useState();
  const { user, onLogin, onLogout } = useUser();

  return (
    <div>
      {user ? (
        <UserMenu 
          user={user} 
          onLogout={onLogout} 
        />
      ) : (
        <StyledButton variant="outline" onClick={() => setModal('LOGIN')}>
          Login
        </StyledButton>
      )}
      {!user && <StyledButton onClick={() => setModal('REGISTER')}>Register</StyledButton>}
      {modal === 'LOGIN' && (
        <LoginModal 
          onClose={() => setModal()} 
          onRegister={() => setModal('REGISTER')}
          onForgetPassword={() => setModal('FORGET_PASSWORD')}
          onUser={(user) => {
            onLogin(user)
            setModal();
          }}
        />
      )}
      {modal === 'REGISTER' && (
        <RegisterModal
          onClose={() => setModal()} 
          onLogin={() => setModal('LOGIN')}
          onUser={(user) => {
            onLogin(user)
            setModal();
          }}
        />
      )}
      {modal === 'FORGET_PASSWORD' && (
        <ForgetPasswordModal
          onClose={() => setModal()} 
          onLogin={() => setModal('LOGIN')}
        />
      )}
    </div>
  );
};

export default Authentication;
