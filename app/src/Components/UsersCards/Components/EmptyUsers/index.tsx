import React, { FC } from 'react'
import * as Styled from './EmptyUsers.styled'

// @TODO here animation
const EmptyUsers: FC = () => {
  const link = 'https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'

  return (
    <Styled.EmptyUsers>
      Try looking for other users.
      <Styled.Bold>
        Without token, you can get no more than 1000 users! <br />
        You can set github access token for full query.
      </Styled.Bold>
      <Styled.Link marginTop={'.5rem'} target='_blank' href={link}>Guide here</Styled.Link>
    </Styled.EmptyUsers>
  )
}

export default EmptyUsers