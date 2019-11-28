import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 10px;
  }
  html, body {
    width: 100vw;
    height: 100vh;
  }
`

export default GlobalStyle