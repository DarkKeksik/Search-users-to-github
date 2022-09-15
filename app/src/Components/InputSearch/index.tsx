import React, {useState, useId, useEffect} from 'react'
import { useDebounce } from '../../utils/hooks'
import * as Styled from './Input.styled'
import { Props } from './types';

const InputSearch: React.FC<Props> = ({labelText, idCustom, placeholderCustom}) => {
  const [value, setValue] = useState<string>('')
  const [, setUsers] = useState([])
  const valueDebounced = useDebounce(value, 500)
  const inputId = useId()

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(setUsers)
  }, [valueDebounced])

  return (
    <Styled.Wrap>
      {labelText && <Styled.Label htmlFor={idCustom || inputId}>{labelText}</Styled.Label>}
      <Styled.Input
        id={idCustom || inputId}
        type="text"
        value={value}
        onChange={({target}) => setValue(target.value)}
        placeholder={placeholderCustom}
      />
    </Styled.Wrap>
  )
}

export default InputSearch