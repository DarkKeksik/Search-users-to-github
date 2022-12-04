import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  html {
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }

    @media screen and (max-width: 900px) {
      font-size: 12px;
    }

    @media screen and (max-width: 640px) {
      font-size: 10px;
    }
  }
`