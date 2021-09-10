import React, { Component } from "react";
import Header from "./Components/Header.jsx";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { createGlobalStyle } from "styled-components";
import "../src/styles.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
