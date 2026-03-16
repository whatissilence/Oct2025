import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SimpleButton from './SimpleButton.jsx';

function App() {
  const [someText, setSomeText] = useState('')



  return (
    <>
      <span></span>
      <section id="center">
        <div>
          There: {someText}
        </div>
        <SimpleButton start={0} text="I'm first" />
        <SimpleButton start={10} step={3} text="I wanted to be first" />
        <SimpleButton start={100} step={5} text="Hello" />
        <SimpleButton start={1000} step={12} />

      </section>
    </>
  )
}

export default App
