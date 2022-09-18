import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label<{
    color?: string;
    textAlign?: string;
    fontSize?: string
    paddingBottom?: string
  }>`
  font-weight: 700;
  user-select: none;
  cursor: pointer;
  padding-bottom: ${(props) => props.paddingBottom || '.3125rem'};
  color: ${(props) => props.color || '#242424'};
  font-size: ${(props) => props.fontSize || '1.4rem'};
  text-align: ${(props) => props.textAlign || 'inherit'};
`

export const Input = styled.input`
  padding: .625rem .75rem;
  border-radius: 2px;
  font-weight: 700;
  background: inherit;
  border: 0;
  border-bottom: 2px solid;
  transition-duration: .5s;
  outline: none;
  color: #242424;
  
  &:hover {
    background: #ffffff;
  }

  &:focus {
    background: #ffffff;
  }
  
  &::placeholder {
    padding: 0;
    color: #242424;
    font-size: .8rem;
  }
  
  &::target-text {
    color: red;
  }
`