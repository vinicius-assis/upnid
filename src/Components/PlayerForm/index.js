import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text'
})``

const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Start!'
})``

const PlayerForm = () => (
  <form>
    <Input />
    <Submit />
  </form>
)

export default PlayerForm