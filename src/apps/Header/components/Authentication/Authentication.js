import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import getUser from '../../../../apis/getUser';
import Button from '../../../../components/Button';
import ForgetPasswordModal from './components/ForgetPasswordModal';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

const StyledButton = styled(Button)`
  & ~ & {
    margin-left: 1rem;
  }
`;

const Authentication = () => {
  const [modal, setModal] = useState();
  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser();
      setUser(user);
    }

    const authToken = sessionStorage.getItem('TMA_AUTH_TOKEN')

    if (!authToken) {
      return;
    }

    fetchData();
  }, [])

  return (
    <div>
      <StyledButton variant={user ? 'text' : 'outline'} onClick={() => setModal('LOGIN')}>
        {user ? user.email : 'Login'}
      </StyledButton>
      {!user && <StyledButton onClick={() => setModal('REGISTER')}>Register</StyledButton>}
      <LoginModal 
        open={!user && modal === 'LOGIN'} 
        onClose={() => setModal()} 
        onRegister={() => setModal('REGISTER')}
        onForgetPassword={() => setModal('FORGET_PASSWORD')}
        setUser={setUser}
      />
      <RegisterModal
        open={!user && modal === 'REGISTER'} 
        onClose={() => setModal()} 
        onLogin={() => setModal('LOGIN')}
        setUser={setUser}
      />
      <ForgetPasswordModal
        open={!user && modal === 'FORGET_PASSWORD'} 
        onClose={() => setModal()} 
        onLogin={() => setModal('LOGIN')}
      />
    </div>
  );
};

export default Authentication;
