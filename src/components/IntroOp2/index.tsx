import {
    IntroContainer,
    Content,
    Title,
    Text,
    Button,
    SideLogo,
    Wave1,
    Wave2,
    Wave3,
    Wave4
  } from './styles'
  import logo from '../../assets/logo.png'
  
  export function IntroOption2() {
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
  
        <Wave1 />
        <Wave2 />
        <Wave3 />
        <Wave4 />
      </IntroContainer>
    )
  }
  