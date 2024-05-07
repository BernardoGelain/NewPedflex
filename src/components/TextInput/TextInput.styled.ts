import styled from "styled-components";

export const StyledTextInput = styled.input`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 100px;
  border: 1px solid #c0c0c0;
  padding: 14px;

  font-size: 14px;
  color: #707070;

  &:focus {
    outline: 1px solid #c0c0c0;
  }
`;
