import React, {FC, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsersOctokit } from '../../utils/oktokit'
import { setPaginationCurrentPage, setUsersToolkit } from '../../toolkitRedux/reducers/externalApi'
import { Pagination } from '../'
import { EmptyUsers, Card } from './Components'
import { GithubUserProps } from './types'
import * as Styled from './UserCard.styled'

const Users: FC = () => {
  // Get data from users from API
  const [users, total_count]: [[GithubUserProps], number] = useSelector((
    {
      reducerExternalApi: {users: {total_count, items}}
    }
  ) => [items || [], total_count])

  // Get pagination data
  const [currentPage, stepRange]: [number, number] = useSelector((
    { reducerExternalApi:
      { usersPaginationData: {currentPage, stepRange} }
    }
  ) => [currentPage, stepRange])

  // Get login from input search
  const searchLogin: string = useSelector(({reducerExternalApi: {searchLogin}}) => searchLogin)

  const dispatch = useDispatch()

  const setUsersForCurrentPage = useCallback(async (currentPage: number) => {
    const usersGithub = await getUsersOctokit(
      {page: currentPage, per_page: stepRange, q: searchLogin}
    )

    dispatch(setUsersToolkit(usersGithub.data))
  }, [searchLogin])

  const onChangePage = (pageCurrent: number) => {
    dispatch(setPaginationCurrentPage(pageCurrent))
    setUsersForCurrentPage(pageCurrent)
  }

  if (!users.length) {
    return <EmptyUsers />
  }

  // @TODO need preloader
  return (
    <>
      <Styled.Users>
        {users.map(({login, node_id, avatar_url, html_url}) => (
          <Card key={node_id} name={login} avatarUrl={avatar_url} html_url={html_url} />
        ))}
      </Styled.Users>

      {total_count > stepRange &&
        <Pagination
          totalElements={total_count}
          currentPage={currentPage}
          stepRange={stepRange}
          onChangePageCustom={onChangePage}
        />
      }
    </>
  )
}

export default Users