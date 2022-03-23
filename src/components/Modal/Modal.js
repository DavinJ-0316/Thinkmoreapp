import React from 'react';
import styled from 'styled-components';
import Close from './components/Close';

const Mask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  width: 600px;
  min-height: 200px;
  box-shadow: rgb(100 116 139 / 25%) 0px;
  margin: 32px;
  border-radius: 8px;
`;

const Modal = ({
  open,
  onClose,
  children,
}) => {
  if (!open) {
    return null;
  }

  return (
    <Mask>
      <Wrapper>
        <Close onClick={onClose} />
        {children}
      </Wrapper>
    </Mask>
  );
}

export default Modal;
