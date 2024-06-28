import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({theme})=> theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    button {
      svg {
      color: ${({theme})=> theme.COLORS.GRAY_100};
      font-size: 2.4rem;
      }
    }
      
    
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 3rem auto 0;

  > div:nth-child(4){
    margin-top: 2.4rem;
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: -130px auto 3.2rem; //faz com que o Avatar suba um pouco, dando uma sobreposição ao header
  width: 18.6rem;
  height: 18.6rem;
  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    
    background-color: ${({theme})=> theme.COLORS.BLUE};
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    }

    > input{
      display: none;
    }

  }
`;