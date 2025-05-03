import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Intro2Test } from './components/Intro2Test';
import { Carousel } from './components/Carousel';

const components = {
  Header,
  Intro,
  Intro2Test,
  Carousel
}

export function App(){  
  return ( 
    <>
    <components.Header/>
    <components.Carousel/>
    </>
  )
}