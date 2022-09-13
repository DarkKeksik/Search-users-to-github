import React, {useState, useId} from 'react'
import * as Styled from './Input.styled'

type Props = {
  labelText?: string
  idCustom?: string
  placeholderCustom?: string
}

// @TODO use debouncing, later (useDeferredValue)
const Input: React.FC<Props> = ({labelText, idCustom, placeholderCustom}) => {
  const [value, setValue] = useState<string>('')
  const inputId = useId()

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

export default Input