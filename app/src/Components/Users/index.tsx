import React  from 'react'
import { useSelector } from 'react-redux'

import { EmptyUsers, Card } from './Components'
import * as Styled from './UserCard.styled'


const Users = () => {
  const users = useSelector(({ reducerExternalApi: {users} }) => users )

  if (!users.length) {
    return <EmptyUsers />
  }

  // @TODO any
  return (
    <Styled.Users>
      {users.map((user: any) => (
        <Card />
      ))}
    </Styled.Users>
  )
}

export default Users