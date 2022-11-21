import React, { FC, PropsWithChildren, useMemo } from 'react'
import * as Styled from './Slider.styled'
import { SliderProps } from './types'

const Slider: FC<PropsWithChildren & SliderProps> = (props) => {
  const {
    children,
    cols,
    width,
    ...sliderProps
  } = props

  // @TODO Need to add a prop 'spacing' to the width and fix type
  const slideSize: string = useMemo(() => {
    const [widthNumber, widthUnit] = width.match(/^[.]?\d+[.]?\d*|(\D+)/gi)
    return (widthNumber / cols) + widthUnit
  }, [width, cols])

  return (
    <Styled.Slider width={width} { ...sliderProps }>
        { React.Children.map(children, (child) =>
          <Styled.Item size={slideSize}>
            { child }
          </Styled.Item>
        )}
    </Styled.Slider>
  )
}

export default Slider