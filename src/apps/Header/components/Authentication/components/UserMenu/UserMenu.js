import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Menu from '../../../../../../components/Menu';

const Wrapper = styled.div`
  position: relative;
`;

const StyledMenu = styled(Menu)`
  margin-top: 4px;
  min-width: 100%;
`;

const UserMenu = ({
  user,
  onLogout,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Button variant="text" onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {user.email}
      </Button>
      {open && (
        <StyledMenu 
          items={[{
            name: 'dashboard',
            title: 'Dashboard',
            onClick: () => console.log('Dashboard'),
          }, {
            name: 'logout',
            title: 'Logout',
            onClick: onLogout,
          }]}
        />
      )}
    </Wrapper>
  );
}

export default UserMenu;
