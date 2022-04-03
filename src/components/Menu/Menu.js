import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Wrapper = styled.div`
  position: absolute;
  background: white;
  box-shadow: 
    0 5px 5px -3px rgb(0 0 0 / 20%), 
    0 8px 10px 1px rgb(0 0 0 / 14%), 
    0 3px 14px 2px rgb(0 0 0 / 12%);
`;


const Menu = ({
  className,
  items,
}) => (
  <Wrapper className={className}>
    {items.map(({ name, title, onClick }) => (
      <Button 
        key={name} 
        block 
        variant="text"
        onClick={onClick}
      >
        {title}
      </Button>
    ))}
  </Wrapper>
);

export default Menu;
