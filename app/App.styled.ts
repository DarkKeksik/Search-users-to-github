import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`