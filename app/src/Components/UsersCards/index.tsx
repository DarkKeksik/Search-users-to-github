import React, {FC, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsersOctokit } from '../../utils/oktokit'
import { setPaginationCurrentPage, setUsersToolkit, setErrorGithub } from '../../toolkitRedux/reducers/externalApi'
import { Pagination } from '../'
import { EmptyUsers, Card } from './Components'
import { GithubUserProps } from './types'
import * as Styled from './UserCard.styled'
import NetworkError from "./Components/NetworkError";

const Users: FC = () => {
  const dispatch = useDispatch()

  // Get data from users from API
  const [users, total_count, errorGithub]: [[GithubUserProps], number, {[key: string]: string}] = useSelector(({
    reducerExternalApi: {
      users: {total_count, items},
      errorGithub
    }
  }) => [items || [], total_count, errorGithub])

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
      .then(usersGithub => {
        dispatch(setUsersToolkit(usersGithub.data))
      })
      .catch(errorData => dispatch(setErrorGithub(errorData)))
  }, [searchLogin, currentPage])

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
        { errorGithub && <NetworkError text={errorGithub.message} /> }
        { users.map(({login, node_id, avatar_url, html_url}) => (
          <Card key={node_id} name={login} avatarUrl={avatar_url} html_url={html_url} />
        )) }
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