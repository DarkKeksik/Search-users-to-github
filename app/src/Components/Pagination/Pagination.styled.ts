import styled, {css} from 'styled-components'

// @TODO need to simplify
const stylesPageItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border-radius: .275rem;
  min-width: 1.5rem;
  height: 1.5rem;
  font-size: 0.8rem;
  background: #575757;
  border: 2px solid #575757;
  cursor: pointer;
  font-weight: 700;
  transition-duration: .3s;
  
  &:hover {
    color: #575757;
    background: none;
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`
export const PageFirst = styled.a`
  color: white;
  ${ stylesPageItem };
`

export const PagesWrap = styled.div`
  display: flex;
  gap: .2rem;
`
export const PageItem = styled.a<{isActive?: boolean}>`
  ${ stylesPageItem };
  ${({isActive}) => isActive && css`
    box-shadow: inset 1px 0 3px #575757;
    background: none;
  `}  
  color: ${({isActive}) => isActive && '#575757' || 'white'};
`
export const PageLast = styled.a`
  color: white;
  ${ stylesPageItem };
`