import React, {useCallback, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Octokit } from '@octokit/rest'

import { Input } from '../'
import { setUsersToolkit, setTokenToolkit } from '../../toolkitRedux/reducers/externalApi'


const SearchUsers = () => {
  const dispatch = useDispatch()
  const accessToken: string = useSelector(({ reducerExternalApi: {accessToken} }) => accessToken)

  const octokit = useMemo(() => (
    new Octokit({
      auth: accessToken
    })
  ), [accessToken])


  // @ TODO need catch errors and utils for octokit
  const setUsers = useCallback(async (value: string) => {
    await octokit.request('GET /users', {
      username: value
    }).then((data) => dispatch(setUsersToolkit(data)))
  }, [])

  const setToken = useCallback((value: string) => {
    window.localStorage.setItem('accessToken', value)
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
        placeholderCustom='Your github access token *'
        anySideEffects={setToken}
        defaultValue={accessToken}
      />
    </>
  )
}

export default SearchUsers