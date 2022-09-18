import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { Input } from '../'
import { setUsersToolkit } from '../../toolkitRedux/reducers/externalApi'

const SearchUsers = () => {
  const dispatch = useDispatch()

  // @ TODO need catch errors
  const setUsers = useCallback((value: string) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${value}`)
      .then(res => res.json())
      .then((data) => dispatch(setUsersToolkit(data)))
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
        placeholderCustom='Your github access token'
      />
    </>
  )
}

export default SearchUsers