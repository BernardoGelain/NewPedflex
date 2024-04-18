import { styled } from "styled-components";

export const BuscaContainer = styled.div`
  margin-top: 50px;
`;

export const HowItWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  line-height: 1.5em;
`;

export const HowItWorksContent = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const ContainerTitle = styled.span`
  width: 95%;
  text-align: center;
  color: ${({ theme }) => theme.colors.input};
  font-size: 40px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const GreenText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ContentItens = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 180px;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 1133px) {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 180px;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 700px) {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 90px;
    grid-template-columns: repeat(1, 1fr);

    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ItemTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  font-size: 25px;
  line-height: 1.3em;
  height: 80px;
  color: ${({ theme }) => theme.colors.input};
`;

export const ItemText = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.input};
`;

export const ContainerMap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
  margin-bottom: -10% !important;

  @media (max-width: 780px) {
    flex-wrap: wrap;
  }

  @media (max-height: 1100px) {
    margin-bottom: -20%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MapText = styled.div`
  width: 300px;

  @media (max-width: 580px) {
    .containerTexto {
      width: 200px;
    }
  }
`;

export const MapTextDefault = styled.span`
  font-size: 40px;
  width: 100%;
  font-weight: 300;

  @media (max-width: 580px) {
    font-size: 30px;
    width: 100%;
  }
`;

export const StyledText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.purple};
`;

export const MapImage = styled.img`
  width: 40%;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  min-width: 300px;

  @media (max-width: 580px) {
    width: 40%;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    min-width: 300px;
  }
`;
