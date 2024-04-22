import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1060px) {
    width: 70%;
  }
`;
export const DescriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleText = styled.span`
  text-align: start;
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purple};
`;

export const DescriptionText = styled.span`
  text-align: start;
  color: ${({ theme }) => theme.colors.purple};
  width: 90%;
  line-height: 1.5em;
`;

export const FormContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
