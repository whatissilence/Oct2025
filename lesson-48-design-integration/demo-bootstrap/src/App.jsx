import './App.css'
import { Alert } from 'react-bootstrap';
import Header from './components/Header.jsx';
import MyModal from './components/MyModal.jsx';

function App() {

  return (
    <div>
      <Header />
      <Alert variant="success">
        Це успішне повідомлення з react-bootstrap!
      </Alert>
      {/*<MyModal />*/}
    </div>
  )
}

export default App
