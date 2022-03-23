import React from 'react';
import { MdClose } from "react-icons/md";
import styled from 'styled-components';
import Button from '../../../Button';

const Wrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Icon = styled(MdClose)`
  display: flex;
  align-items: center;
  color: rgb(158, 158, 158);
  font-size: 1.5rem;
`;


const Close = ({
  onClick,
}) => (
  <Wrapper>
    <Button variant="text" onClick={onClick}>
      <Icon />
    </Button>
  </Wrapper>
);

export default Close;
