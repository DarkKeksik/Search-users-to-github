import styled, {css} from 'styled-components'

export const EmptyUsers = styled.div`
  flex: 1;
  display: flex;
  gap: .5rem;
  flex-direction: column;
  justify-content: center;
  font-size: .875rem;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 1.4rem;
  color: #242424;
`

export const SubTitle = styled.h2`
  font-size: .8rem;
  color: #242424;
  font-weight: 100;
  text-align: left;
`

export const Bold = styled.b`
  color: #c7549c;
  font-size: .8rem;
  line-height: 1.1rem;
  text-align: left;
`

export const Link = styled.a<{marginTop?: string}>`
  font-weight: 700;
  color: #4f4f4f;
  font-size: .8rem;
  
  ${( props ) => props.marginTop && css`
    margin-top: ${props.marginTop}
  `};
`