import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { OctokitWithConfig } from '../../utils/oktokit'
import { setUsersToolkit, setTokenToolkit } from '../../toolkitRedux/reducers/externalApi'
import { setAccessTokenLS } from '../../utils/localstorage'
import { Input } from '../'

const SearchUsers: FC = () => {
  const dispatch = useDispatch()
  const accessToken: string = useSelector(({ reducerExternalApi: {accessToken} }) => accessToken)

  // @TODO It is necessary to take out type
  const [currentPage, stepRange]: [currentPage: number, stepRange: number] = useSelector((
    {reducerExternalApi: {
      usersPaginationData: {
        currentPage, stepRange
      }
    }}
    ) => [currentPage, stepRange]
  )

  const setUsers = useCallback(async (value: string) => {
    if ( !value ) {
      dispatch(setUsersToolkit([]))
      return
    }

    const usersGithub = await OctokitWithConfig(accessToken).request("GET /search/users", {
      page: currentPage,
      per_page: stepRange,
      q: value
    })

    dispatch(setUsersToolkit(usersGithub.data))
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