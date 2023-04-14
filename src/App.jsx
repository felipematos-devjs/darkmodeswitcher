import './App.css'
import { ModeSwitcherBox } from './components/ModeSwitcherBox'
import { ThemeProvider } from './providers/ThemeProvider'
import { BG } from './components/BG'
import { icons } from './assets/Icons'
import { StackCard } from './components/StackCard'
import { Copyright } from './components/Copyright'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'
import { images } from './assets/images'
import { ModalContextProvider } from './providers/ModalProvider'
import { ModalButton } from './components/ModalButton'

import { modalDescription, modalSocials } from './dataconsts/ModalData'

function App() {
  return (
    <ThemeProvider>
      <ModalContextProvider>
      
      <BG />
      <div></div>
      <ModeSwitcherBox />
      <Footer className='footer'>
        <Copyright>
            <h2>Made by</h2>
            <h2>Felipe Matos</h2>
            <p>(in his free time!)</p>
        </Copyright>
        <section className='stackCardContainer'>
          <StackCard logo={icons.html.logo} name = {icons.html.name} />
          <StackCard logo={icons.css.logo} name = {icons.css.name} />
          <StackCard logo={icons.javascript.logo} name = {icons.javascript.name} />
          <StackCard logo={icons.react.logo} name = {icons.react.name} />
        </section>
      </Footer>
      
        <ModalButton />
        <Modal title="Dark Mode Switcher" description={modalDescription} socials={modalSocials} img={images.og_image}/>  
      </ModalContextProvider>
    </ThemeProvider>
  )
}

export default App
