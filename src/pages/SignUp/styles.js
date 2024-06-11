import styled from "styled-components";
import backGroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({theme})=> theme.COLORS.BLUE};
    margin-bottom: 1.6rem;
  }
  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 12.4rem;
    color: ${({theme})=> theme.COLORS.BLUE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backGroundImg})no-repeat center center;
  background-size: cover;
`