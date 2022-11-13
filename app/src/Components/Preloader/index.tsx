import React, { FC, PropsWithChildren } from 'react'
import * as Styled from './Preloader.styled'

type PreloaderProps = {
  isLoading?: boolean
} & PropsWithChildren

const Preloader: FC<PreloaderProps> = ({children, isLoading = false}) => (
    <Styled.Wrap>
      {isLoading && (
        <Styled.Preloader>
          <Styled.Loader />
        </Styled.Preloader>
      )}
      { children }
    </Styled.Wrap>
)

export default Preloader