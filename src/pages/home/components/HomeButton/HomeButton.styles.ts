import { styled } from 'styled-components';

type ButtonContainerProps = {
  bgColor?: string;
  size?: string;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.input};
  min-width: 150px;
  height: ${({ size }) => (size === 'sm' ? '40px' : '50px')};
  max-width: 300px;

  font-size: ${({ size }) => (size === 'sm' ? '15px' : '20px')};
  font-weight: 600;
  padding: 10px 15px;
  border: 0px solid transparent;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.purple};
  border-radius: 25px;
  transition: all 0.2s ease-in;

  &:hover .buttonIcon {
    opacity: 1;
    margin-left: 0px;
    transition: 500ms;
  }

  &:hover .buttonText {
    opacity: 0;
    transition: 500ms;
  }
`;

export const ButtonIcon = styled.img<{ size: string }>`
  position: absolute;
  opacity: 0;
  margin-left: -45px;
  width: ${({ size }) => (size === 'sm' ? '28px' : '32px')};
  height: 2 ${({ size }) => (size === 'sm' ? '28px' : '32px')};
`;
