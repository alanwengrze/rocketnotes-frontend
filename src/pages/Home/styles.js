import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};

`;

export const Brand = styled.div`
  grid-area: brand;
  background-color: red;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  background: ${({theme})=> theme.COLORS.BACKGROUND_900};

   > h1 {
    font-size: 2.4rem;
    color: ${({theme})=> theme.COLORS.BLUE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};

  padding-top: 6.4rem;
  text-align: center;


  > li {
    	margin-bottom: 2rem;
    button{
      text-transform: capitalize;
    }
  }

`;

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 3.2rem 6.4rem;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
  grid-area: newnote;
  background-color: ${({theme})=> theme.COLORS.BLUE};
  color: ${({theme})=> theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;

  svg{
    margin-right: .6rem;
  }
`;