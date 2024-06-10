import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.BLUE};
  color: ${({theme})=> theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  transition: 0.4s;

  &:disabled{
    opacity: 0.5;
    /* cursor: not-allowed; */
  }

  &:hover{
    filter: brightness(0.9);
  }
`