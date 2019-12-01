import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Image from '../../assets/carro.png'

const turbo = keyframes`
  0 {
    transfrom: translate(-60%, 10%)
  }
  50% {
    transform: translate(-60%, -30%)
  }
  100% {
    transfrom: translate(-60%, 10%)
  }
`;

const Car = styled.img.attrs({
  src: Image
})`
  width: 100%;
`

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
  transform: translate(-60%, 10%);
  transition: left .3s linear;
  ${props => props.active && props.enable ? css`animation: ${turbo} 4s linear;` : ''}
`

const CarWrapper = ({ position, status, enableTurbo, turboAmount }) => (
  <Wrapper move={position} active={status} enable={enableTurbo}>
    <Car />
  </Wrapper>
)

export default CarWrapper