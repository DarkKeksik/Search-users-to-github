import React, { FC } from 'react'
import * as Styled from './Repository.styled'

type RepositoryProps = {
  title: string
  login: string
  description?: string
  language?: string
  stargazers_count?: number
  visibility?: number
}

const Repository: FC<RepositoryProps> = ({
  title,
  login,
  description,
  language,
  stargazers_count,
  visibility
}) => {
  return (
    <Styled.Repository>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Descriptions>
        <Styled.Description>
          <b>Author: </b> {login}
        </Styled.Description>
        <Styled.Description>
          <b>Description: </b>
          {description || 'No description'}
        </Styled.Description>
        <Styled.Description>
          <b>Language: </b>
          {language || 'No language'}
        </Styled.Description>
        <Styled.Description>
          <b>Stars: </b>
          {stargazers_count || 0}
        </Styled.Description>
        <Styled.Description>
          <b>Visibility: </b>
          {visibility}
        </Styled.Description>
      </Styled.Descriptions>
    </Styled.Repository>
  )
}

export default Repository