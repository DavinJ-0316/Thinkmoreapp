import React from 'react';
import styled from 'styled-components';
import { MdError, MdClear } from 'react-icons/md';

const Wrapper = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 14px 16px;
  box-shadow: 
    0 3px 5px -1px rgb(0 0 0 / 20%), 
    0 6px 10px 0 rgb(0 0 0 / 14%), 
    0 1px 18px 0 rgb(0 0 0 / 12%);
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const Error = styled(MdClear)`
  color: white;
  margin-right: 1rem;
  background: #d14343;
  border-radius: 100%;
  padding: 4px;
`;

const Alert = ({
  children,
}) => (
  <Wrapper>
    <Error />
    {children}
  </Wrapper>
)

export default Alert;
