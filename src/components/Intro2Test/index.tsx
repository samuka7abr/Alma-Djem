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
import wave1 from '../../assets/wave.svg'      // azul
import wave2 from '../../assets/wave2.svg'     // ciano
import wave3 from '../../assets/wave3.svg'     // rosa
import wave4 from '../../assets/wave4.svg'     // laranja

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

      {/* laranja - fundo */}
      <SvgWave src={wave4} style={{ zIndex: 1 }} />

      {/* azul */}
      <SvgWaveTop src={wave1} style={{ zIndex: 2 }} />

      {/* rosa */}
      <SvgWaveMid src={wave3} style={{ zIndex: 3 }} />

      {/* ciano - frente */}
      <SvgWaveFront src={wave2} style={{ zIndex: 4 }} />
    </IntroContainer>
  )
}
