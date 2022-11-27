import styled, { css } from 'styled-components'
import { SlideProps, SliderProps } from './types'

const animTime = '.5s'

export const Slider = styled.section<SliderProps>`
  display: flex;
  gap: ${({ spacing }) => spacing || '.625rem;' };
  max-width: ${({ width }) => width || '100%' };
  width: 100%;
  padding: 1.5rem 0;
  overflow: hidden;
`

export const AnimationWrap = styled.div<SlideProps>`
  display: flex;
  width: 100%;
  transform: translateX(
    ${({slideSize, slideSelected}) => slideSelected &&
      css`calc(-${slideSize} * ${slideSelected - 1})` || 0
    }
  );
  transition-duration: ${ animTime };
`
/**
 * Calc result = size + all css attrs with size
 * margin, border .etc
 * @TODO calc should be moved to a function
 * */
export const Item = styled.div<SlideProps>`
  transform: scale(
    ${({slideId, slideSelected}) =>
      (slideId === (slideSelected - 1)) ||
      (slideId === (slideSelected + 1)) ?
        .9 : 1
    }
  );
  z-index: ${({slideId, slideSelected}) => 
    (slideId === (slideSelected - 1)) && '0' ||
    (slideId === slideSelected) && '1' ||
    (slideId === (slideSelected + 1)) && '2'
  };
  opacity: ${({slideId, slideSelected}) => 
    (slideId === (slideSelected - 1)) ||
    (slideId === (slideSelected + 1)) ?
    .5 : 1
  };
  
  flex: 0 0 ${({slideSize}) => slideSize ? css`calc(${slideSize})` : css`calc(6.25rem)`};
  min-height: ${({slideSize}) => slideSize ? css`calc(${slideSize} * 1.5)` : css`calc(6.25rem * 1.5)`};
  transition-duration: ${ animTime };
  background: white;
  border-radius: 6px;
  
  &:hover {
    z-index: 10;
  }
`