import React from 'react'

import { UsersSearch, Users } from '../'
import * as Styled from './UsersSection.styled'

const UsersSection = () => {
  return (
    <Styled.UsersSection>
      <UsersSearch />
      <Users />
    </Styled.UsersSection>
  )
}

export default UsersSection