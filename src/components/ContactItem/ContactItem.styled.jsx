import styled from 'styled-components';

export const Item = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
`;

export const Contact = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const BtnDelete = styled.button`
  align-items: flex-end;
  width: 60px;
  border: none;
  border-radius: 8px;
  padding: 4px;
  &:hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 250ms;
  }
`;
