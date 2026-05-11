import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { LuActivity } from "react-icons/lu";
import { ToastContainer, toast, Slide } from 'react-toastify';
import Modal from 'react-modal';
import { Tooltip } from 'react-tooltip'

import ReactCountUp from 'react-countup';
const CountUp = ReactCountUp.default || ReactCountUp;

import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import DemoTimer from './components/DemoTimer.jsx';
import { HexColorPicker } from 'react-colorful';
import { CirclePicker } from 'react-color';
import CardForm from './components/CardForm.jsx';
import GraphicsDemo from './components/GraphicsDemo.jsx';
import GraphicsDemo2 from './components/GraphicsDemo2.jsx';

Modal.setAppElement('#modalContainer');

const customStyles = {
  overlay: {
    backgroundColor: '#000000aa',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [headerColor, setHeaderColor] = useState('#000000')
  const [buttonBackColor, setButtonBackColor] = useState('#aaaaaa')

  const handleChangeHeaderColor = (value) => {
    setHeaderColor(value)
    console.log('React colorful', value)
  }

  const handleChangeButtonsBackColor = (value) => {
    setButtonBackColor(value.hex)
    console.log('React color', value)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleShowToast = () => {
    toast.info('Toast displayed successfully!');
  }

  return (
    <>
      <section id="center">
        <div>
          <h1
            data-tooltip-id="my-tooltip"
            data-tooltip-content="That is main header!"
            data-tooltip-place="left"
            data-tooltip-variant="error"
            data-tooltip-float={true}
          >
            Get started
          </h1>
          <p style={{color: headerColor}}>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <section>
        <div>
          <GraphicsDemo2 />
        </div>
        <div>
          <GraphicsDemo />
        </div>
        <div>
          <CardForm />
        </div>
        <div>
          REACT COLOR:
          <CirclePicker
            color={buttonBackColor}
            onChange={handleChangeButtonsBackColor}
            colors={[
              "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4",
              "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722",
              "#795548", "#607d8b"
            ]}
          />
        </div>

        <div>
          REACT COLORFUL
          <HexColorPicker
           color={headerColor}
           onChange={handleChangeHeaderColor}
          />
        </div>
        <div>
          {/*<DemoTimer />*/}
        </div>
        <div>
          <h1>Відвідувачів: <CountUp end={1000} duration={2} /></h1>
        </div>
        <div>
          <button
            style={{
              backgroundColor: buttonBackColor,
              padding: 10,
              borderRadius: 5,
              borderColor: buttonBackColor,
            }}
            onClick={handleShowToast}>Show toast</button>
        </div>
        <div>
          <button
            style={{
              backgroundColor: buttonBackColor,
              padding: 10,
              borderRadius: 5,
              borderColor: buttonBackColor,
            }}
            onClick={handleOpenModal}>Show modal</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <strong>My modal is gooood!</strong>
          </Modal>
        </div>
        <div>
          <LuActivity style={{color: '#ff0000', fontSize: '1.2rem'}} />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <ToastContainer
        toastStyle={{
          background: 'pink',
          color: 'black',
        }}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
      <Tooltip id="my-tooltip" />
    </>
  )
}

export default App
