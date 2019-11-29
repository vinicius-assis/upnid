import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//import Background from '../../assets/fundo-carro.gif'
import BackgroundPaused from '../../assets/paused-fundo.png'
import InfoBar from '../InforBar'
import CarWrapper from '../Car'
import PausedLayer from '../PausedLayer'
import PlayerForm from '../PlayerForm'


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
  const [nickname, setNickname] = useState('Unknown')

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

  function formSubmit(event) {
    event.preventDefault()
    let username = event.target.username.value
    if (username !== '') {
      setNickname(username)
    } 
  }

  useEffect(() => document.addEventListener('keypress', moveCar))

  return (
    <Screen >
      <PausedLayer>
        <PlayerForm event={formSubmit} />
      </PausedLayer>
      <InfoBar username={nickname}/>
      <CarWrapper position={position}/>
    </Screen>
)}

export default ScreenWrapper