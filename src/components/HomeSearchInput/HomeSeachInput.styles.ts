import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 80%;
  font-size: 16px;
  padding: 16px 20px;
  margin-bottom: 10px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.purple} !important;
`;
