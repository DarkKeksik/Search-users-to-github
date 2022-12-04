import React, { FC } from 'react'

import MainLayout from './src/Layouts/MainLayout'
import { UsersSection, Repositories } from './src/Components'

const App: FC = () => {
  return (
    <MainLayout>
      <UsersSection />
      <Repositories />
    </MainLayout>
  )
}

export default App