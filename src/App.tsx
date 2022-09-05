import React from "react";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";
import SignUp from "./routes/SignUp";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};    
    /* padding: 0 16px 0px 16px; */
    /*  모바일 : 16px
        데스크탑 페이지 전체적으로 패딩 좌우 30px 먹혀있음 */
  }
  button {
    -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  }
  a {
    
    text-decoration: none;
    color: inherit;
    
  }
  li {
    list-style: none;
  }
`;
// 전역 스타일 적용

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
