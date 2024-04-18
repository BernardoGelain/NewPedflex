import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 100px;
  margin-top: 10%;
  height: 300px;
`;

export const ServiceContent = styled.div`
  display: flex;
  font-size: 16px;
  text-align: start;
  margin-left: 40px;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  width: 50%;

  color: ${({ theme }) => theme.colors.input};
`;

export const ServiceTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ServiceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const IconFooter = styled.img`
  width: 20px;
  margin-right: 10px;
`;

export const WrapItem = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialMediaContent = styled.div`
  display: flex;
  gap: 14px;
`;

export const SocialMediaIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const FooterButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-right: 100px;
`;

export const BraveoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
