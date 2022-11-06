import styled, {css} from 'styled-components'

export const EmptyUsers = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: .875rem;
`

export const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const Bold = styled.b`
  color: #c7549c;
  font-size: .8rem;
  line-height: 1.1rem;
`

export const Link = styled.a<{marginTop?: string}>`
  font-weight: 700;
  color: #4f4f4f;
  font-size: .8rem;
  
  ${( props ) => props.marginTop && css`
    margin-top: ${props.marginTop}
  `};
`