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
  background-image: url(${props => props.start ? Background : BackgroundPaused });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const ScreenWrapper = () => {
  const [startGame, setStartGame] = useState(false)
  const [prepare, setPrepare] = useState(false)
  const [paused, setPaused] = useState(true)
  const [finished, setFinished] = useState(true)
  const [position, setPosition] = useState('middle')
  const [nickname, setNickname] = useState('Unknown')
  const [countToStart, setCountToStart] = useState('')
  const [countLap, setCountLap] = useState(0)

  const pauseGame = () => {
    setPaused(true)
    setStartGame(false)
    setPrepare(false)
    setFinished(false)
  }

  const moveCar = (event) => {
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

  //Function for get a username from form and add in InfoBar
  const formSubmit = (event) => {
  event.preventDefault()
  let username = event.target.username.value
  if (username !== '') {
    setNickname(username)
  }
  setPrepare(true)
  setPaused(false)
  }

  const resetGame = (event) => {
    event.preventDefault()
    setFinished(true)
    setCountLap(0)
  }

  //Active countdown to start the game
  useEffect(() => {
    let count = 3
    const interval = prepare && setInterval(() => {
      setCountToStart(count)
      if(count === 0) {
        setStartGame(true)
        setCountToStart('GO!')
      } else if (count < 0) {
        clearInterval(interval)
        setCountToStart('')
      }
      count--

    }, 800)
  }, [prepare])

  //Active countLap when the game start
  useEffect(() => {
    let count = countLap
    let interval = null
    if (startGame) {
      interval = setInterval(() => {
        if (count === 5) {
          clearInterval(interval)
          pauseGame()
          setFinished(true)
        } else if (paused) {
          clearInterval(interval)
          pauseGame()
          setFinished(false)
        }
        setCountLap(count)
        count++
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [countLap, paused, startGame, finished])
  

  useEffect(() => document.addEventListener('keypress', moveCar))

  return (
    <Screen start={startGame} >
      {paused &&
      <PausedLayer>
        <PlayerForm event={formSubmit} isFinished={finished} resetEvent={resetGame}/>
      </PausedLayer>}
      <InfoBar username={nickname} lap={countLap}/>
      <CountDown>{countToStart}</CountDown>
      <CarWrapper position={position}/>
    </Screen>
)}

export default ScreenWrapper