import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 80px;
  margin-bottom: 200px;
`;

export const LogoContent = styled.div``;

export const LogoImg = styled.img`
  max-width: 350px;
  padding-bottom: 20px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const DescriptionContent = styled.div`
  font-size: 34px;
  line-height: 1.5em;
  font-weight: 600;
  text-align: center;
  width: 80%;

  @media (max-width: 950px) {
    font-size: 28px;
  }
`;

export const SearchInput = styled.input`
  width: 80%;
  font-size: 16px;
  padding: 16px 20px;
  margin-bottom: 10px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.purple} !important;
`;
