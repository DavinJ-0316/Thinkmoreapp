import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import Logo from '../../components/Logo';

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

const AuthenticationModal = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <LoginWrapper>
        <Header>
          <p>
            <StyledLogo />
          </p>
          <Title>{title}</Title>
          <Sub>Where the Exploration Begins</Sub>
        </Header>
        {children}
      </LoginWrapper>
    </Modal>
  );
};

export default AuthenticationModal;
