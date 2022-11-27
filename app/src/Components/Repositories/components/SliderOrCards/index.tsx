import React, { Fragment } from 'react'
import Repository from '../Repository'
import { Slider } from '../../../'
import sliderConfig from './sliderConf'

type RepositoryProps = {
  id: number
  name: string
  language: string
  visibility: number
  description: string
  stargazers_count: number
  owner: {
    login: string
    [keys: string]: string | number
  }
}

type SliderOrCardsProps = {
  userRepositories: Array<RepositoryProps>
}

const SliderOrCards = ({userRepositories}: SliderOrCardsProps) => {
  if (userRepositories.length <= sliderConfig.cols) {
    const UserRepositoriesJSX = userRepositories.map(({
        id,
        name,
        language,
        visibility,
        description,
        stargazers_count,
        owner: {login}
      }) => (
        <Fragment key={id}>
          <Repository
            title={name}
            login={login}
            description={description}
            language={language}
            stargazers_count={stargazers_count}
            visibility={visibility}
          />
        </Fragment>
      ))

    return <>{UserRepositoriesJSX}</>
  }

  return (
    <Slider {...sliderConfig}>
      {userRepositories.map(({
         id,
         name,
         language,
         visibility,
         description,
         stargazers_count,
         owner: {login}
       }) => (
        <Fragment key={id}>
          <Repository
            title={name}
            login={login}
            description={description}
            language={language}
            stargazers_count={stargazers_count}
            visibility={visibility}
          />
        </Fragment>
      ))}
    </Slider>
  )
}

export default SliderOrCards