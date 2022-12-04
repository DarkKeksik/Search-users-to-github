import React from 'react'
import {useRoutes} from 'react-router-dom'
import App from "../../App";

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <App/>
    }
  ])
}

export default Routes