import React from 'react'
import * as Styled from './Repositories.styled'
import { Slider } from '../'

const Repositories = () => {
  const sliderConfig = {
    width: '30rem',
    spacing: '0',
    cols: 3
  }

  return (
    <Styled.Repositories>
      <Slider {...sliderConfig}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Slider>
    </Styled.Repositories>
  )
}

export default Repositories