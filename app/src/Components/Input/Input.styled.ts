import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: 320px;
`

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.4rem;
  user-select: none;
  cursor: pointer;
`

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 4px;
  font-weight: 700;
  background: #ebebeb;
  box-shadow: 4px 6px 5px #e5e5e5;
  border: 2px solid #6e6e6e;
  transition-duration: .5s;
  
  &:hover {
    background: #ffffff;
    box-shadow: inset 0 0 4px #919191;
  }
`