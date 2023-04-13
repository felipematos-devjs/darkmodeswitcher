import './App.css'
import { ModeSwitcherBox } from './components/ModeSwitcherBox'
import { GlobalProvider } from './providers/GlobalProvider'
import { BG } from './components/BG'
import { icons } from './assets/Icons'
import { StackCard } from './components/StackCard'
import { Copyright } from './components/Copyright'
import { Footer } from './components/Footer'

function App() {
  return (
    <GlobalProvider>
      <BG />  
      <div></div>
      <ModeSwitcherBox />
      
      <Footer className='footer'>
        <Copyright />
        <section className='stackCardContainer'>
          <StackCard logo={icons.html.logo} name = {icons.html.name} />
          <StackCard logo={icons.css.logo} name = {icons.css.name} />
          <StackCard logo={icons.javascript.logo} name = {icons.javascript.name} />
          <StackCard logo={icons.react.logo} name = {icons.react.name} />
        </section>
      </Footer>
      
    </GlobalProvider>
  )
}

export default App
