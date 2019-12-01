import React from 'react'
import styled from 'styled-components'
import Keys from './keys'

const Wrapper = styled.div`
  background-color: #cccccc70;
  min-height: 100px;
  margin-top: 20px;
  padding: 10px 10px 30px;
  border-radius: 3px;
  z-index: 5;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const TipItem = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  border-radius: 3px;
  box-shadow: 0px 3px 0px #000;
  position: relative;

  @media (max-width: 600px) {
    width: 20%;
    margin: 5px;
  }
`

const Key = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Description = styled.p`
  position: absolute;
  bottom: -24px;
  color: #fff;
  font-style: italic;
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

const Tips = () => (
  <Wrapper>
    {Keys.map(({item, description}) => (
      <TipItem key={item}>
        <Key>{item}</Key>
        <Description>{description}</Description>
      </TipItem>
    ))}
  </Wrapper>
)

export default Tips 