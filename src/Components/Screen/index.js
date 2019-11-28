import React from 'react'
import styled from 'styled-components'
//import Background from '../../assets/fundo-carro.gif'
import BackgroundPaused from '../../assets/paused-fundo.png'
import Car from '../Car'
import InfoBar from '../InforBar'


const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundPaused});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const ScreenWrapper = () => (
  <Screen>
    <InfoBar />
    <Car />
  </Screen>
)

export default ScreenWrapper