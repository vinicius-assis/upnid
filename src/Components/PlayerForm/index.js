import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text',
  name: 'username',
  placeholder: 'Digite seu nick',
})`
  width: 250px;
  height: 40px;
  border: none;
  text-align: center;
  font-size: 1.8rem
  font-weight: bold;
  margin-bottom: 20px;
  border-radius: 4px;
  
  &::placeholder {
    color: #555;
    opacity: 1;
  }
`

const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Start!'
})`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 4px;
  background-color: red;
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  box-shadow: 3px 4px 0px #d20000;
  cursor: pointer;
  transition: all .3s linear;

  &:hover {
    background:#d20000;
    box-shadow:3px 4px 0 #b00000;
  }

  &:active {
    position:relative;
    top:5px;
    box-shadow:none;
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const PlayerForm = ({ event }) => (
  <Form onSubmit={event}>
    <Input />
    <Submit />
  </Form>
)

export default PlayerForm