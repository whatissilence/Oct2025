import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MySuperComp from './components/MySuperComp.jsx';
import ExampleForm from './components/ExampleForm.jsx';
import PostList from './components/PostsList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <hr />
      <div>
        <ExampleForm />
      </div>
      <hr />
      <div>
        <PostList />
      </div>
    </>
  )
}

export default App
