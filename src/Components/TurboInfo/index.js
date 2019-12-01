import React from 'react'
import styled from 'styled-components'

const TurboWrapper = styled.div`
  width: auto;
  right: 2%;
  top: 20%;
  border: 8px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: #005100;
  position: absolute;
  z-index: 9999;
`

const TurboInfo = styled.span`
  font-size: 4rem;
  color: #ff681f;
`


const TurboVisor = ({ amount }) => (
  <TurboWrapper>
    <TurboInfo>Turbo {amount} / 1</TurboInfo>
  </TurboWrapper>
)

export default TurboVisor