import styled from 'styled-components'

export const Repository = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  word-break: break-word;
  background: white;
`

export const Title = styled.h4`
  text-align: center;
  color: #242424;
  font-size: 1rem;
`

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  height: 100%;
`

export const Description = styled.p`
  font-size: .8rem;
  line-height: 1.2rem;
  color: #242424;
  max-height: 40%;
  overflow-x: auto;
`