import React from 'react'
import * as Styled from './App.styled'
import MainLayout from './src/Layouts/MainLayout'
import InputSearch from './src/Components/InputSearch'

const App = () => {
  return (
    <>
      <Styled.GlobalStyle/>
      <MainLayout>
        <InputSearch
          labelText='Search users'
          placeholderCustom='Let`s find someone...'
        />
      </MainLayout>
    </>
  )
}

export default App