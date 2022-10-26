import styled from "styled-components"
import { Link } from 'react-router-dom'

export const SHeader = styled.div`


`;
export const LoginButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderUl = styled.ul`
  display: flex;
  list-style-type: none;
`;
export const HeaderLi = styled.li`
  padding: 10px;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
`;
export const SLink = styled(Link)`
    text-decoration: none;
    color:black;
`;

export const AddButton = styled.div`
display: flex;
justify-content: center;
`;