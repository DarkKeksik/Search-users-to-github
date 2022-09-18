import React, { PropsWithChildren } from 'react'
import * as Styled from './MainLayout.styled'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Styled.MainLayout>
    { children }
  </Styled.MainLayout>
)

export default MainLayout