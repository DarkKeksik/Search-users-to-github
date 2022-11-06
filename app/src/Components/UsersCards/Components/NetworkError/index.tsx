import React, { FC } from 'react'
import * as Styled from './NetworkError.styled'

const NetworkError: FC<{text: string}> = ({text}) => {
  return (
    <Styled.NetworkError>
      <Styled.Wrap>
        <Styled.Title>Error from GitHub!</Styled.Title>
        <Styled.Text>{ text }</Styled.Text>
      </Styled.Wrap>
    </Styled.NetworkError>
  )
}

export default NetworkError