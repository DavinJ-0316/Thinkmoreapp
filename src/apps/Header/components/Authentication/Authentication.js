import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../../../../components/Button';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

const StyledButton = styled(Button)`
  & ~ & {
    margin-left: 1rem;
  }
`;

const Authentication = () => {
  const [modal, setModal] = useState();

  return (
    <div>
      <StyledButton variant="outline" onClick={() => setModal('LOGIN')}>Login</StyledButton>
      <StyledButton onClick={() => setModal('REGISTER')}>Register</StyledButton>
      <LoginModal 
        open={modal === 'LOGIN'} 
        onClose={() => setModal()} 
        onRegister={() => setModal('REGISTER')}
      />
      <RegisterModal
        open={modal === 'REGISTER'} 
        onClose={() => setModal()} 
        onLogin={() => setModal('LOGIN')}
      />
    </div>
  );
};

export default Authentication;
