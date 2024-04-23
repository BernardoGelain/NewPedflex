import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999999999;
  position: fixed;

  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;

export const LoaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VeplexName = styled.span`
  margin-left: -90px;
  background-clip: text;
  -webkit-background-clip: text; /* Para navegadores WebKit */
  color: transparent;
  background-image: linear-gradient(
    90deg,
    rgba(0, 245, 159, 0.64) 0%,
    rgba(167, 0, 245, 0.867) 100%
  );

  color: white;
  font-size: 40px;
  font-weight: bold;
`;

export const VeplexDescription = styled.div`
  font-size: 20px !important;
  margin-left: 100px;

  color: white;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 16px !important;
    margin-left: 130px;
  }
`;
