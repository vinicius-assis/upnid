import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//import Background from '../../assets/fundo-carro.gif'
import BackgroundPaused from '../../assets/paused-fundo.png'
import InfoBar from '../InforBar'
import CarWrapper from '../Car'


const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundPaused});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const ScreenWrapper = () => {
  const [position, setPosition] = useState('middle')

  function moveCar(event) {
    switch(event.key) {
      case 'a':
        return setPosition('left')
      case 's':
        return setPosition('middle')
      case 'd':
        return setPosition('right')
      default:
        return position
    }   
  }

  useEffect(() => document.addEventListener('keypress', moveCar))

  return (
    <Screen >
      <InfoBar />
      <CarWrapper position={position}/>
    </Screen>
)}

export default ScreenWrapper