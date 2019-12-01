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
//({state}) => state ? 'Start!' : 'Restart!'

const Submit = styled.input.attrs({
  type: 'submit',
  value: ({newGame, state}) => newGame 
            ? 'New Game' 
            : state 
              ? 'Start!' 
              : 'Restart!'
})`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 4px;
  background-color: ${({newGame}) => newGame ? 'green' : 'red' };
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  box-shadow: ${({newGame}) => newGame ? '3px 4px 0px #008000' : '3px 4px 0px #d20000' };
  cursor: pointer;
  transition: all .3s linear;
  ${({newGame}) => newGame ? 'margin-bottom: 20px' : ''}

  &:hover {
    background: ${({newGame}) => newGame ? '#00b000' : '#d20000'} ;
    box-shadow: ${({newGame}) => newGame ? '3px 4px 0 #008000' : '3px 4px 0 #b00000'};
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

const PlayerForm = ({ event, isFinished, resetEvent }) => (
  <Form onSubmit={event}>
    {isFinished && <Input/>}
    {!isFinished && <Submit newGame onClick={resetEvent} />}
    <Submit state={isFinished} />
  </Form>
)

export default PlayerForm