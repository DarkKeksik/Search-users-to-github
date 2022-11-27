import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

import { Preloader, Slider } from '../'
import { getRepositoriesByUserOctokit } from '../../utils/oktokit'
import * as Styled from './Repositories.styled'

const Repositories = () => {
  const [userRepositories, setUserRepositories] = useState<null | Array<any>>(null)
  const [isLoading, setIsLoading] = useState(true)
  const loginSelected: string = useSelector(({reducerExternalApi: {selectedLogin}}) => selectedLogin)

  const sliderConfig = {
    width: '35rem',
    spacing: '0',
    cols: 3
  }

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

  if (!userRepositories) {
    return (
      <div>Make a request and click the "Repositories" button :З</div>
    )
  }

  return (
    <Styled.Repositories>
      <Preloader isLoading={isLoading}>
        <Slider {...sliderConfig}>
          {userRepositories.map(({id, name, description}) => (
            <Styled.Repository key={ id }>
              <Styled.Title>{ name }</Styled.Title>
              <Styled.Description>{ description || 'No description' }</Styled.Description>
            </Styled.Repository>
          ))}
        </Slider>
      </Preloader>
    </Styled.Repositories>
  )
}

export default Repositories