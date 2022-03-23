import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import Authentication from './components/Authentication';

const Wrapper = styled.div`
  padding: 0 32px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(100 116 139 / 12%) 0px 1px 4px;
`;

const StyledLogo = styled(Logo)`
  height: 35px;
`;

const Header = () => {

  return (
    <Wrapper>
      <StyledLogo />
      <Authentication />
    </Wrapper>
  );
}

export default Header;
