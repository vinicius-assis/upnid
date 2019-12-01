import React from 'react'
import styled from 'styled-components'

const Nickname = styled.h3`
  color: #fff;
  font-size: 4rem;
`

const LapCount = styled.span`
  color: red;
  font-size: 3.6rem;
`

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0;
`

const InfoBar = ({ username, lap }) => (
  <InfoWrapper>
    <Nickname>{username}</Nickname>
    <LapCount>{lap}/5</LapCount>
  </InfoWrapper>
)

export default InfoBar