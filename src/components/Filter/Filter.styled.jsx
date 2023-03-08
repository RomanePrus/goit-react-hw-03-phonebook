import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 16px;
  text-align: center;
  font-weight: 600;
  border-radius: 30px;
`;

export const FilterInput = styled.input`
  padding: 4px;
  margin-top: 8px;
  display: inline-block;
  border-radius: 6px;
  border: none;
  outline: none;
  &:hover,
  :focus {
    transform: scale(1.1);
    transition: transform linear 250ms;
  }
`;
