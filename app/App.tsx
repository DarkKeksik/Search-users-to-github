import React from 'react'
import * as Styled from './App.styled'
import MainLayout from './src/Layouts/MainLayout'
import Input from './src/Components/Input'

const App = () => {
  return (
    <>
      <Styled.GlobalStyle/>
      <MainLayout>
        <Input
          labelText='Search users'
          placeholderCustom='Let`s find someone...'
        />
      </MainLayout>
    </>
  )
}

export default App