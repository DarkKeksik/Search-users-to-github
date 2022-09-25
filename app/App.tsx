import React, { FC } from 'react'

import MainLayout from './src/Layouts/MainLayout'
import { UsersSection } from './src/Components'
import * as Styled from './App.styled'

const App: FC = () => {
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