import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Intro2Test } from './components/Intro2Test';
import { Carousel } from './components/Carousel';
import { Discography } from './components/Discography';

const components = {
  Header,
  Intro,
  Intro2Test,
  Carousel,
  Discography
}

export function App(){  
  return ( 
    <>
    <components.Discography/>
    </>
  )
}