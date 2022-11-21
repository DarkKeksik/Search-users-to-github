import React, {FC, PropsWithChildren, useMemo, useState} from 'react'
import * as Styled from './Slider.styled'
import { SliderProps } from './types'

const Slider: FC<PropsWithChildren & SliderProps> = (props) => {
  const {
    children,
    cols,
    width,
    slideCurrent = 1,
    ...sliderProps
  } = props

  const [slideSelected, setSlideSelected] = useState(slideCurrent)

  // @TODO Need to add a prop 'spacing' to the width and fix any type
  const slideSize: string = useMemo(() => {
    const [widthNumber, widthUnit] = width.match(/^[.]?\d+[.]?\d*|(\D+)/gi)
    return (widthNumber as any / cols) + widthUnit
  }, [width, cols])

  return (
    <Styled.Slider width={width} { ...sliderProps }>
      <Styled.AnimationWrap slideSize={slideSize} slideSelected={slideSelected}>
        { React.Children.map(children, (child, key) =>
          <Styled.Item
            key={key}
            slideId={key}
            slideSize={slideSize}
            slideSelected={slideSelected}
            onClick={() => setSlideSelected(key)}
          >
            { child }
          </Styled.Item>
        )}
      </Styled.AnimationWrap>
    </Styled.Slider>
  )
}

export default Slider