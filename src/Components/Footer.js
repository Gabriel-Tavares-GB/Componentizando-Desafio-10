import React from "react";
import styled from "styled-components";

const CorpoTitulo = styled.h3`
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
      margin-height: 0%;
      width: 100%;
    }
  }
`;

function Footer() {
  return (
    <React.Fragment>
      <CorpoTitulo>
        Estamos na Footer componentizando e renderizando com React-Fragment
      </CorpoTitulo>
    </React.Fragment>
  );
}

export default Footer;
