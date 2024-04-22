import styled from 'styled-components';

export const NavContainer = styled.nav<{ isNavbarVisible: boolean }>`
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 40px;
  width: 100%;
  height: 80px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
  background: ${({ theme }) => theme.colors.purple};

  position: fixed;
  top: 0;
  left: 0;

  translate: ${({ isNavbarVisible }) => (isNavbarVisible ? '0' : '0 -72px')};
  transition: 0.3s;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
`;
