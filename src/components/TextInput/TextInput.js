import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid;
  border-color: rgb(229 232 239);

  ${({ focused }) => focused && css`
    border-color: rgb(56, 50, 160);
  `}

  ${({ error }) => error && css`
    border-color: rgb(209, 67, 67);
  `}
`;

const StyledInput = styled.input`
  position: relative;
  outline: 0;
  font-size: 1rem;
  line-height: 1.5;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.5rem;
  display: block;
  width: 100%;
  font-weight: 500;
  padding: 12px 0;
`;

const Label = styled.label`
  position: absolute;
  color: rgb(101, 116, 139);
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  
  transition: font-size 0.15s, transform 0.15s;

  ${({ focused }) => focused && css`
    color: rgb(56, 50, 160);
  `}
  
  ${({ error }) => error && css`
    color: rgb(209, 67, 67);
  `}

  ${({ floating }) => floating && css`
    font-size: 12px;
    transform: translateY(-50%);
  `}
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: rgb(209, 67, 67);
  margin-top: 8px;
`;

const TextInput = ({
  value,
  onChange,
  label,
  type,
  error,
  errorMessage,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <Wrapper 
        focused={focused} 
        error={error}
        onFocus={() => setFocused(true)} 
        onBlur={() => setFocused(false)}
      >
        <Label 
          error={error}
          focused={focused} 
          floating={focused || value.length > 0}
        >
          {label}
        </Label>
        <StyledInput type={type} value={value} onChange={(event) => onChange(event.target.value)} />
      </Wrapper>
      {error && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
    </div>
  );
}

export default TextInput;
