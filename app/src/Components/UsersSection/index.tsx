import React, { FC } from 'react'

import { UsersSearch, UsersCards } from '../'
import * as Styled from './UsersSection.styled'

const UsersSection: FC = () => {
  return (
    <Styled.UsersSection>
      <UsersSearch />
      <UsersCards />
    </Styled.UsersSection>
  )
}

export default UsersSection