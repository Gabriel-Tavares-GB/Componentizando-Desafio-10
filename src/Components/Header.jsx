import React from "react";
import styled from "styled-components";

const TituloUm = styled.h1`
  background-color: #444;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  animation-duration: 6s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 30px;
  background-color: black;
`;

const ListItem = styled.li`
  color: blue;

  &:hover {
    color: #ff0000;
    cursor: no-drop;
  }
`;

function Header() {
  return (
    <div>
      <TituloUm>Estamos na Header Componentizando com jsx</TituloUm>
      <List>
        <ListItem>Início</ListItem>
        <ListItem>Sobre</ListItem>
        <ListItem>Galeria</ListItem>
      </List>
    </div>
  );
}

export default Header;
