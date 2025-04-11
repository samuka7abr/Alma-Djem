import { Container, Logo, Actions, SocialLink, Burger } from "./styles"
import logo from '../../assets/logo.png'

export function Header() {
    return (
        <Container>
            <Logo>
                <img src={logo}/>
            </Logo>
            <Actions>
                <SocialLink href="#">Link 1</SocialLink>
                <SocialLink href="#">Link 2</SocialLink>
            </Actions>
            <Burger>☰</Burger>
        </Container>
    )
}