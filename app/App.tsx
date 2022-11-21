import React, { FC } from 'react'

import MainLayout from './src/Layouts/MainLayout'
import { UsersSection, Repositories } from './src/Components'
import * as Styled from './App.styled'

const App: FC = () => {
  return (
    <>
      <Styled.GlobalStyle/>
      <MainLayout>
        <UsersSection />
        <Repositories />
      </MainLayout>
    </>
  )
}

export default App