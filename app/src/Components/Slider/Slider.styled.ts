import styled, { css } from 'styled-components'
import { SliderProps } from "./types"

export const Slider = styled.section<SliderProps>`
  display: flex;
  gap: ${({ spacing }) => spacing || '.625rem;' };
  max-width: ${({ width }) => width || '100%' };
  width: 100%;
  overflow: hidden;
`

/**
 * Calc result = size + all css attrs with size
 * margin, border .etc
 * @TODO calc should be moved to a function
 * */
export const Item = styled.div<{size?: string}>`
  border: 1px solid black;
  
  flex: 0 0 ${({size}) => size ? css`calc(${size} - 2px)` : css`calc(6.25rem + 1px)`};
  height: ${({size}) => size ? css`calc(${size} - 2px)` : css`calc(6.25rem + 1px)`};
`