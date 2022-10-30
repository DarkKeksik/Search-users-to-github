import styled from 'styled-components'

const bgButton = '#494949eb';
const animTime = '.3s';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 60px minmax(150px, 1fr) 120px;
  grid-gap: 0.5rem;
  align-items: center;
`

export const Avatar = styled.div<{src?: string}>`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background: #49494936 url(
    ${({src}) => src}
  ) no-repeat;
  background-size: cover;
`

export const Name = styled.p``

export const Button = styled.a`
  padding: 0.4rem 0.2rem;
  border-radius: 0.275rem;
  border: 2px solid ${bgButton};
  background: ${bgButton};
  transition-duration: ${animTime};
  text-align: center;
  color: white;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: inherit;
    color: ${bgButton}
  }
`