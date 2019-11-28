import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/carro.png'

const Car = styled.img.attrs({
  src: Image
})`
  width: 100%;
`

const Wrapper = styled.div`
  width: 20%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-60%);
`

const CarWrapper = () => (
  <Wrapper>
    <Car />
  </Wrapper>
)

export default CarWrapper