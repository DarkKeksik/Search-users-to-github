import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import * as Styled from './general.styled'
import store from './src/toolkitRedux/store'
import Routes from "./src/Routes";

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <Styled.GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)