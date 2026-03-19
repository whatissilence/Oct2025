import './App.css'

import heroImg from './assets/hero.png';
import viteImg from './assets/vite.svg';
import reactImg from './assets/react.svg';

import CounterButton from './components/CounterButton.jsx';
import UserLabel from './components/UserLabel.jsx';

export default function App() {
  function getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  return (
    <>
      <CounterButton limit={5} />
      <CounterButton limit={getRandomInt()} />
      <CounterButton />

      <UserLabel src={heroImg} userName="Adam Novak" />
      <UserLabel src={viteImg} userName="Eva Pavlovska" desc="The best Polish lady in the World." />
      <UserLabel src={reactImg} userName="John Smith"  desc="The best American guy in the World." />
      <UserLabel src={heroImg} userName="Mary Poppins" desc="The best English lady in the World." />
    </>
  )
}