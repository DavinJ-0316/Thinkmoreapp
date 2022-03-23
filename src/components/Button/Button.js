import styled, { css } from 'styled-components';

const Button = styled.button`
  line-height: 1.75;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: 500;

  transition: 
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `}

  ${({ variant }) => {
    switch(variant) {
      case 'text':
        return css`
          &:hover { 
            background-color: rgba(107, 114, 128, 0.04);
          }
        `;

      case 'outline':
        return css`
          border: 1px solid rgba(80, 72, 229, 0.5);
          color: rgb(80, 72, 229);

          &:hover {
            background-color: rgba(80, 72, 229, 0.04);
            border: 1px solid rgb(80, 72, 229);
          }
        `;

      case 'facebook':
        return css`
          color: rgb(255, 255, 255);
          background-color: rgb(33, 150, 243);

          &:hover {
            background-color: rgb(11, 121, 208);
          }
        `;

      case 'google': 
        return css`
          color: rgb(255, 255, 255);
          background-color: rgb(209, 67, 67);

          &:hover {
            background-color: rgb(146, 46, 46);
          }
        `;

      case 'primary':
      default:
        return css`
          color: rgb(255, 255, 255);
          background-color: rgb(80, 72, 229);

          &:hover {
            background-color: rgb(56, 50, 160);
          }
        `;
    }
  }}
`;

export default Button
