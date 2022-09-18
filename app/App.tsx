import React from 'react'

import MainLayout from './src/Layouts/MainLayout'
import { UsersSection } from './src/Components'
import * as Styled from './App.styled'

const App = () => {
  return (
    <>
      <Styled.GlobalStyle/>
      <MainLayout>
        <UsersSection />
      </MainLayout>
    </>
  )
}

export default App