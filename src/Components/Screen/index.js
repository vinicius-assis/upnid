import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Background from '../../assets/fundo-carro.gif'
import BackgroundPaused from '../../assets/paused-fundo.png'
import InfoBar from '../InfoBar'
import CarWrapper from '../Car'
import PausedLayer from '../PausedLayer'
import PlayerForm from '../PlayerForm'
import CountDown from '../Countdown'


const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.start === true ? Background : BackgroundPaused });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const ScreenWrapper = () => {
  const [startGame, setStartGame] = useState(false)
  const [paused, setPaused] = useState(true)
  const [position, setPosition] = useState('middle')
  const [nickname, setNickname] = useState('Unknown')
  const [countToStart, setCountToStart] = useState('')
  
  function playGame() {
    setPaused(false)
    timer()
  }

  function pauseGame() {
    setPaused(true)
    setStartGame(false)
  }

  function moveCar(event) {
    switch(event.key) {
      case 'a':
        return setPosition('left')
      case 's':
        return setPosition('middle')
      case 'd':
        return setPosition('right')
      case 'p':
        return pauseGame()
      default:
        return position
    }   
  }

  function timer() {
    let i = 3
    let interval = setInterval(() => {
      setCountToStart(i)
      if (i === 0) {
        clearInterval(interval)
        setCountToStart('GO!')
        setStartGame(true)
        setTimeout(() => setCountToStart(''), 1000)
      }
      i--
    }, 1000)
  }

  //Function for get a username from form and add in InfoBar
  function formSubmit(event) {
    event.preventDefault()
    let username = event.target.username.value
    if (username !== '') {
      setNickname(username)
    }
    playGame()
  }

  useEffect(() => document.addEventListener('keypress', moveCar))

  return (
    <Screen start={startGame}>
      <PausedLayer paused={paused}>
        <PlayerForm event={formSubmit} />
      </PausedLayer>
      <InfoBar username={nickname}/>
      <CountDown>{countToStart}</CountDown>
      <CarWrapper position={position}/>
    </Screen>
)}

export default ScreenWrapper