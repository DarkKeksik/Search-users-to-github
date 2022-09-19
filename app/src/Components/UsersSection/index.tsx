import React from 'react'

import { UsersSearch, UsersCards } from '../'
import * as Styled from './UsersSection.styled'

const UsersSection = () => {
  return (
    <Styled.UsersSection>
      <UsersSearch />
      <UsersCards />
    </Styled.UsersSection>
  )
}

export default UsersSection