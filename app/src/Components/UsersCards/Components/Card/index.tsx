import React from 'react'
import * as Styled from './Card.styled'

// TODO any
const Card = ({name}: any) => {

  return (
    <Styled.Card>
      <Styled.Avatar />
      <Styled.Name>{name}</Styled.Name>
      <Styled.Button>View repos</Styled.Button>
    </Styled.Card>
  )
}

export default Card