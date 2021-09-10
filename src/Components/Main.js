import React from "react";
import styled from "styled-components";

const Corpo = styled.h2`
  background-color: #444;
  color: #fff;
  text-align: center;
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

function Main() {
  return (
    <>
      <Corpo>
        Estamos na Main componentizando e renderizando com uma Tag vazia{" "}
      </Corpo>
    </>
  );
}

export default Main;
