import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Pagination } from '../'
import { EmptyUsers, Card } from './Components'
import { GithubUserProps } from './types'
import * as Styled from './UserCard.styled'

const Users: FC = () => {
  const [users, total_count]: [[GithubUserProps], number] = useSelector((
    {reducerExternalApi: {users: {total_count, items}}}
  ) => [items || [], total_count])

  const [currentPage, stepRange]: [number, number] = useSelector((
    {reducerExternalApi: {usersPaginationData: {currentPage, stepRange}}}
  ) => [currentPage, stepRange])


  if (!users.length) {
    return <EmptyUsers />
  }

  // @TODO need preloader
  return (
    <>
      <Styled.Users>
        {users.map(({login, node_id, avatar_url}) => (
          <Card key={node_id} name={login} avatarUrl={avatar_url} />
        ))}
      </Styled.Users>

      {total_count > stepRange &&
        <Pagination totalElements={total_count} currentPage={currentPage} stepRange={stepRange}/>
      }
    </>
  )
}

export default Users