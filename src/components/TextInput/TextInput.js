import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid;
  border-color: rgb(229 232 239);

  ${({ focused }) => focused && css`
    border-color: #3732a0;
  `}

  ${({ error }) => error && css`
    border-color: #d14343;
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

const Text = styled.span`
  position: absolute;
  color: rgb(101, 116, 139);
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  
  transition: font-size 0.15s, transform 0.15s;

  ${({ focused }) => focused && css`
    color: #3732a0;
  `}
  
  ${({ error }) => error && css`
    color: #d14343;
  `}

  ${({ floating }) => floating && css`
    font-size: 12px;
    transform: translateY(-50%);
  `}
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: #d14343;
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
        data-testid="WRAPPER"
      >
        <label>
          <Text
            error={error}
            focused={focused} 
            floating={focused || value.length > 0}
          >
            {label}
          </Text>
          <StyledInput 
            type={type} 
            value={value} 
            onChange={(event) => onChange(event.target.value)} 
          />
        </label>
      </Wrapper>
      {error && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
    </div>
  );
}

export default TextInput;
