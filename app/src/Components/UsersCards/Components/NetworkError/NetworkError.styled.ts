import styled from 'styled-components'

export const NetworkError = styled.div`
  position: absolute;
  top: 0;
  
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #feebfee0;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background: #575757;
  box-shadow: 0 0 10px #0000002b;
  letter-spacing: 1px;
`

export const Title = styled.h5`
  font-size: .8rem;
  color: #ebebeb;
  font-weight: 700;
`

export const Text = styled.p`
  font-size: .7rem;
  line-height: 1.2rem;
  color: #ff7e7e;
`