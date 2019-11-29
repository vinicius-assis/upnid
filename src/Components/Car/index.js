import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/carro.png'

const Car = styled.img.attrs({
  src: Image
})`
  width: 100%;
`

//left 30%
//middle 50%
//right 70%

const Wrapper = styled.div`
  width: 20%;
  position: absolute;
  bottom: 0;
  left: ${props => {
    switch(props.move) {
      case 'left':
        return '30%'
      case 'middle':
        return '50%'
      case 'right':
        return '70%'
      default:
        return '50%'
    }
  }};
  transform: translateX(-60%);
  transition: left .3s linear;
`

const CarWrapper = ({ position }) => (
  <Wrapper move={position}>
    <Car />
  </Wrapper>
)

export default CarWrapper