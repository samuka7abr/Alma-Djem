import React from 'react'
import {
  IntroContainer,
  Content,
  Title,
  Text,
  Button,
  SideLogo,
  SvgWave,
  SvgWaveMid,
  SvgWaveTop,
  SvgWaveFront
} from './styles'

import logo from '../../assets/logo.png'
import wave1 from '../../assets/wave.svg'
import wave2 from '../../assets/wave2.svg'
import wave3 from '../../assets/wave3.svg'
import wave4 from '../../assets/wave4.svg'

export function Intro2Test() {
  return (
    <IntroContainer>
      <Content>
        <Title>ALMA DJEM</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Button>OUÇA AGORA</Button>
      </Content>

      <SideLogo>
        <img src={logo} alt="Logo grande" />
      </SideLogo>

      <SvgWave src={wave4} style={{ zIndex: 1 }} />
      <SvgWaveTop src={wave1} style={{ zIndex: 2 }} />
      <SvgWaveMid src={wave3} style={{ zIndex: 3 }} />
      <SvgWaveFront src={wave2} style={{ zIndex: 4 }} />
    </IntroContainer>
  )
}
