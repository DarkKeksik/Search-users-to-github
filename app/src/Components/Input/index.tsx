import React, {useMemo, useState} from 'react'
import * as Styled from './Input.styled'

type Props = {
  labelText?: string
  idCustom?: string
  placeholderCustom?: string
}

const Input: React.FC<Props> = ({labelText, idCustom, placeholderCustom}) => {
  const [value, setValue] = useState<string>('')
  const inputId: string = useMemo(() => `inputId_${ Math.floor(Math.random() * 1000) }`, [])

  return (
    <Styled.Wrap>
      { labelText && <Styled.Label htmlFor={idCustom || inputId}>{labelText}</Styled.Label> }
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