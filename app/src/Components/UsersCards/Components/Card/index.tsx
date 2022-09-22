import React from 'react'

import { githubUserProps } from '../../types'
import * as Styled from './Card.styled'

const Card = ({name, avatarUrl}: githubUserProps) => (
  <Styled.Card>
    <Styled.Avatar src={avatarUrl} />
    <Styled.Name>{name}</Styled.Name>
    <Styled.Button>View repos</Styled.Button>
  </Styled.Card>
)

export default Card