import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { Input } from '../'
import { setUsersToolkit, setTokenToolkit } from '../../toolkitRedux/reducers/externalApi'

const SearchUsers = () => {
  const dispatch = useDispatch()
  const accessToken: string = useSelector(({ reducerExternalApi: {accessToken} }) => accessToken)

  useEffect(() => {
    const token = window.localStorage.getItem('accessToken')
    dispatch(setTokenToolkit(token))
  }, [])

  // @ TODO need catch errors
  const setUsers = useCallback((value: string) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${value}`)
      .then(res => res.json())
      .then((data) => dispatch(setUsersToolkit(data)))
  }, [])

  const setToken = useCallback((value: string) => {
    window.localStorage.setItem('accessToken', value)
    dispatch(setTokenToolkit(value))
  }, [])


  // @TODO next time, instead labelColor (ThemeProvider)
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