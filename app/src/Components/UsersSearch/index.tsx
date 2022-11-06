import React, {FC, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUsersOctokit } from '../../utils/oktokit'
import {
  setUsersToolkit,
  setTokenToolkit,
  setLoginSearch,
  setPaginationCurrentPage
} from '../../toolkitRedux/reducers/externalApi'
import { setAccessTokenLS } from '../../utils/localstorage'
import { Input } from '../'

const SearchUsers: FC = () => {
  const dispatch = useDispatch()
  const accessToken: string = useSelector(({ reducerExternalApi: {accessToken} }) => accessToken)

  type PropsStore =  [
    currentPage: number,
    stepRange: number,
  ]

  const [currentPage, stepRange]: PropsStore = useSelector(({
    reducerExternalApi: {
      searchLogin,
      usersPaginationData: {
        currentPage,
        stepRange
      },
      errorGithub
    }}) => [currentPage, stepRange]
  )

  const setUsers = useCallback(async (value: string) => {
    if (!value) {
      dispatch(setUsersToolkit([]))
      return
    }

    dispatch(setLoginSearch(value))
    dispatch(setPaginationCurrentPage(currentPage))
    await getUsersOctokit({page: currentPage, per_page: stepRange, q: value}, accessToken)
      .then(usersGithub => dispatch(setUsersToolkit(usersGithub.data)))
  }, [accessToken])

  const setToken = useCallback((value: string) => {
    setAccessTokenLS(value)
    dispatch(setTokenToolkit(value))
  }, [])

  return (
    <>
      <Input
        labelText='Search users'
        placeholderCustom='Username for search'
        anySideEffects={setUsers}
        labelStyled={
          {
            textAlign: 'center',
            fontSize: '1.8rem',
            paddingBottom: '1rem'
          }
        }
      />
      <Input
        placeholderCustom='Your github access token'
        anySideEffects={setToken}
        defaultValue={accessToken}
      />
    </>
  )
}

export default SearchUsers