import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Preloader } from '../'
import { getRepositoriesByUserOctokit } from '../../utils/oktokit'
import SliderOrCards from './components/SliderOrCards'
import * as Styled from './Repositories.styled'
import RepositoriesEmpty from "./components/RepositoriesEmpty";

const Repositories = () => {
  const [userRepositories, setUserRepositories] = useState<Array<any> | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const loginSelected: string = useSelector(({reducerExternalApi: {selectedLogin}}) => selectedLogin)

  useEffect(() => {
    setIsLoading(true)
    loginSelected && (getRepositoriesByUserOctokit(loginSelected)
        .then(({data}) => {
          setUserRepositories(data)
          setIsLoading(false)
        })
      .finally(() => {
        setIsLoading(false)
      })
    )
  }, [loginSelected])

  return (
    <Styled.Repositories>
      {!userRepositories ?
        <div>You need to click the button in user card, after searching by login</div> :
        <Preloader isLoading={isLoading}>
          {userRepositories && !userRepositories.length ?
            <RepositoriesEmpty /> :
            <SliderOrCards userRepositories={userRepositories} />
          }
        </Preloader>
      }
    </Styled.Repositories>
  )
}

export default Repositories