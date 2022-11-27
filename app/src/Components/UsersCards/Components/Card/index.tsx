import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setLoginSelected } from '../../../../toolkitRedux/reducers/externalApi'

import { GithubUserProps } from '../../types'
import * as Styled from './Card.styled'

const Card: FC<GithubUserProps> = ({name, avatarUrl}) => {
  const dispatch = useDispatch()

  return (
    <Styled.Card>
      <Styled.Avatar src={avatarUrl} />
      <Styled.Name>{name}</Styled.Name>
      <Styled.Button onClick={() => dispatch(setLoginSelected(name))}>repositories</Styled.Button>
    </Styled.Card>
  )
}

export default Card