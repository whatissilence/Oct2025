import { useCallback, useId, useMemo, useState } from 'react'
import './App.css'
import MyTitle from './components/MyTitle.jsx';
import Modal from './components/Modal.jsx';

function someComplexCalculations(num) {
  let i = 0;
  // while(i < 3000000000) {
  //   i++;
  // }
  return i + num;
}

function App() {
  const [count, setCount] = useState(0)
  const [isRedColor, setIsRedColor] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const myUniqueId = useId();
  console.log('App render', count)
  console.log('myUniqueId', myUniqueId)

  const handleChangeColor = (e) => {
    setIsRedColor(prev => !prev)
  }

  const handleInsideClick = useCallback(() => {
    console.log('handleInsideClick', isRedColor);
  }, [isRedColor])

  const complexResult = useMemo(() => {
    return someComplexCalculations(count);
  }, [count]);

  return (
    <>
      <section id="center">
        <MyTitle isRedColor={isRedColor} insideClick={handleInsideClick} />
        <div>Result: {complexResult}</div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <hr />
        <button
          type="button"
          onClick={handleChangeColor}
        >
          Switch color
        </button>
        <div>
          <button onClick={() => setIsModalOpen(true)}>Show modal</button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example with createPortal"
          >
            <p>Modal is rendered in different div</p>
          </Modal>
        </div>
        <div>
          <label htmlFor={myUniqueId}>Label</label>
          <input id={myUniqueId} />
        </div>
      </section>
    </>
  )
}

export default App
