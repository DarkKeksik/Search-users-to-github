import React, { FC, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { getUsersOctokit } from '../../utils/oktokit'
import {
  setUsersToolkit,
  setTokenToolkit,
  setLoginSearch,
  setPaginationCurrentPage,
  setIsLoadingUsers
} from '../../toolkitRedux/reducers/externalApi'
import { setAccessTokenLS } from '../../utils/localstorage'
import { Input } from '../'

const SearchUsers: FC = () => {
  type PropsStore =  [
    currentPage: number,
    stepRange: number,
    searchLogin: string
  ]

  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  const accessToken: string = useSelector(({ reducerExternalApi: {accessToken} }) => accessToken)

  const [currentPage, stepRange, searchLogin]: PropsStore = useSelector(({
    reducerExternalApi: {
      searchLogin,
      usersPaginationData: {
        currentPage,
        stepRange
      },
      errorGithub
    }}) => [currentPage, stepRange, searchLogin]
  )

  const setUsers = useCallback(async (value: string) => {
    if (!value) {
      dispatch(setUsersToolkit([]))
      return
    }

    dispatch(setIsLoadingUsers(true))
    dispatch(setLoginSearch(value))
    dispatch(setPaginationCurrentPage(currentPage))

    await getUsersOctokit({page: currentPage, per_page: stepRange, q: value}, accessToken)
      .then(usersGithub => dispatch(setUsersToolkit(usersGithub.data)))
      .finally(() => dispatch(setIsLoadingUsers(false)))

    // Change url after input change
    // @TODO need put into a func or const url string
    setSearchParams(`?login=${value}`)
  }, [accessToken])

  const setToken = useCallback((value: string) => {
    setAccessTokenLS(value)
    dispatch(setTokenToolkit(value))
  }, [])


  useEffect(() => {
    const loginFromUrl = searchParams.get('login')
    dispatch(setLoginSearch(loginFromUrl))
  }, [searchParams])

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
        defaultValue={searchLogin}
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