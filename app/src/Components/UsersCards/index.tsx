import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsersOctokit } from '../../utils/oktokit'
import { setPaginationCurrentPage, setUsersToolkit, setErrorGithub, setIsLoadingUsers } from '../../toolkitRedux/reducers/externalApi'
import { Pagination, Preloader } from '../'
import { EmptyUsers, Card, NetworkError } from './Components'
import { StoreProps } from './types'
import * as Styled from './UserCard.styled'

const Users: FC = () => {
  const dispatch = useDispatch()

  // Get data from users from API
  const [users, total_count, errorGithub, isLoadingUsers]: StoreProps = useSelector(({
    reducerExternalApi: {
      users: {total_count, items},
      errorGithub,
      isLoadingUsers
    }
  }) => [items || [], total_count, errorGithub, isLoadingUsers])

  // Get pagination data
  const [currentPage, stepRange]: [number, number] = useSelector(({
    reducerExternalApi: { usersPaginationData: {currentPage, stepRange} }
  }) => [currentPage, stepRange])

  // Get login from input search
  const searchLogin: string = useSelector(({
    reducerExternalApi: {searchLogin}}
  ) => searchLogin)

  const setUsersForCurrentPage = useCallback(async (currentPage: number) => {
    await getUsersOctokit({ page: currentPage, per_page: stepRange, q: searchLogin })
      .then(usersGithub => dispatch(setUsersToolkit(usersGithub.data)))
      .catch(errorData => dispatch(setErrorGithub(errorData)))
      .finally(() => dispatch(setIsLoadingUsers(false)))
  }, [searchLogin, currentPage])

  const onChangePage = (pageCurrent: number) => {
    dispatch(setIsLoadingUsers(true))
    dispatch(setPaginationCurrentPage(pageCurrent))
    setUsersForCurrentPage(pageCurrent)
  }

  if (!users.length) {
    return <EmptyUsers />
  }

  return (
    <>
      <Preloader isLoading={isLoadingUsers}>
        <Styled.Users>
          { errorGithub && <NetworkError text={errorGithub.message} /> }
          { users.map(({login, node_id, avatar_url, html_url}) => (
            <Card key={node_id} name={login} avatarUrl={avatar_url} html_url={html_url} />
          )) }
        </Styled.Users>
      </Preloader>

      {total_count > stepRange &&
        <Pagination
          totalElements={total_count}
          currentPage={currentPage}
          stepRange={stepRange}
          onChangePage={onChangePage}
        />
      }
    </>
  )
}

export default Users