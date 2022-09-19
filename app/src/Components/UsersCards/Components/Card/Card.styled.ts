import styled from 'styled-components'

const bgButton = '#494949eb';
const animTime = '.3s';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 60px minmax(150px, 1fr) 120px;
  grid-gap: 0.5rem;
  align-items: center;
`

export const Avatar = styled.div`
  height: 60px;
  width: 60px;
  background: #49494936;
  border-radius: 100%;
`

export const Name = styled.p``

export const Button = styled.button`
  padding: 0.4rem 0.2rem;
  border-radius: 0.275rem;
  border: 2px solid ${bgButton};
  background: ${bgButton};
  transition-duration: ${animTime};
  color: white;
  cursor: pointer;
  
  &:hover {
    background: inherit;
    color: ${bgButton}
  }
`