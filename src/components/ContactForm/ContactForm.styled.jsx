import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
  border-radius: 18px;
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 4px;
  display: inline-block;
  margin-left: 16px;
  border-radius: 6px;
  border: none;
  outline: none;
  &:hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 250ms;
  }
`;

export const BtnAdd = styled.button`
  width: 120px;
  align-self: center;
  color: #fff;
  border: none;
  border-radius: 8px;
  filter: drop-shadow(1px 2px 1px black);
  padding: 8px;
  color: black;
  &:hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 250ms;
  }
`;
