import React, { FC } from 'react'

import { GithubUserProps } from '../../types'
import * as Styled from './Card.styled'

const Card: FC<GithubUserProps> = ({name, avatarUrl}) => (
  <Styled.Card>
    <Styled.Avatar src={avatarUrl} />
    <Styled.Name>{name}</Styled.Name>
    <Styled.Button>View repos</Styled.Button>
  </Styled.Card>
)

export default Card