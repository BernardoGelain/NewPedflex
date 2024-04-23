import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.purple} !important;
`;
