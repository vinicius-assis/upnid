import styled from 'styled-components'

const PausedLayer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0000007a;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.paused === true ? '' : 'display: none;'}
`

export default PausedLayer