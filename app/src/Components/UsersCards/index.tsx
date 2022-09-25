import React  from 'react'
import { useSelector } from 'react-redux'

import { EmptyUsers, Card } from './Components'
import { githubUserProps } from './types'
import * as Styled from './UserCard.styled'


const Users = () => {
  const users: Array<githubUserProps> = useSelector((
    { reducerExternalApi: {users: {items}} }) => items || []
  )

  if (!users.length) {
    return <EmptyUsers />
  }

  // @TODO need preloader
  return (
    <Styled.Users>
      {users.map(({login, node_id, avatar_url}) => (
        <Card key={node_id} name={login} avatarUrl={avatar_url} />
      ))}
    </Styled.Users>
  )
}

export default Users