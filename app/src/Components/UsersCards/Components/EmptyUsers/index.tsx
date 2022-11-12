import React, { FC } from 'react'
import * as Styled from './EmptyUsers.styled'

// @TODO here animation
const EmptyUsers: FC = () => {
  const link = 'https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'

  return (
    <Styled.EmptyUsers>
      <Styled.Title>
        Try looking for other users.
      </Styled.Title>
      <Styled.Bold>
        <Styled.SubTitle>
          You can get only 1000 users from request, !{'>'}&nbsp;200 pages.
        </Styled.SubTitle>
        Without a token, you will be able to make fewer requests per minute!
        You can set github access token for mores queries.
      </Styled.Bold>
      <Styled.Link target='_blank' href={link}>Guide here</Styled.Link>
    </Styled.EmptyUsers>
  )
}

export default EmptyUsers