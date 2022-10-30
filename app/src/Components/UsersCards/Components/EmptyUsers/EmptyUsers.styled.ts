import styled, {css} from 'styled-components'

export const EmptyUsers = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  line-height: 1.25rem;
  font-size: .875rem;
  text-align: center;
`

export const Bold = styled.b`
  color: #c7549c;
`

export const Link = styled.a<{marginTop?: string}>`
  font-weight: 700;
  color: #242424;
  
  ${( props ) => props.marginTop && css`
    margin-top: ${props.marginTop}
  `};
`