import React, { FC } from 'react'

import { GithubUserProps } from '../../types'
import * as Styled from './Card.styled'

const Card: FC<GithubUserProps> = ({name, avatarUrl, html_url}) => (
  <Styled.Card>
    <Styled.Avatar src={avatarUrl} />
    <Styled.Name>{name}</Styled.Name>
    <Styled.Button href={`${html_url}?tab=repositories`} target='__blank'>repositories</Styled.Button>
  </Styled.Card>
)

export default Card