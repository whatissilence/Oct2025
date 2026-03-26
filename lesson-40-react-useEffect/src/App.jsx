import './App.css'
import ControlledInput from './components/ControlledInput.jsx';
import UncontrolledInput from './components/UncontrolledInput.jsx';
import Card from './components/Card.jsx';
import MyForm from './components/MyForm.jsx';
import User from './components/User.jsx';
import Timer from './components/Timer.jsx';

function App() {

  return (
    <>
      <Card>
        <Timer />
      </Card>

      <Card>
        <User />
      </Card>

      <Card>
        <ControlledInput />
      </Card>
      <Card>
        <UncontrolledInput />
      </Card>
      <Card>
        Quick brown fox jumps over the lazy dog!
      </Card>
      <Card>
        <MyForm/>
      </Card>
    </>
  )
}

export default App
