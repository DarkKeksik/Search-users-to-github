import React, { PropsWithChildren } from 'react'
import * as Styled from './MainLayout.styled'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Styled.Wrap1024>{ children }</Styled.Wrap1024>
)

export default MainLayout