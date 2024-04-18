import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 80px 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const LogoContent = styled.div``;

export const LogoImg = styled.img`
  max-width: 350px;
  padding-bottom: 20px;
`;

export const DescriptionContent = styled.div`
  font-size: 34px;
  line-height: 1.5em;
  font-weight: 600;
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  font-size: 16px;
  padding: 16px 20px;
  min-width: 60em;
  margin-bottom: 10px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.purple} !important;
`;
