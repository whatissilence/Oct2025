import './App.css'
import UserContainer from './components/UserContainer.jsx';
import MySuperForm from './components/MySuperForm.jsx';
import Card from './components/Card.jsx';
import MySuperFormOptimistic from './components/MySuperFormOptimistic.jsx';

function App() {

  return (
    <>
      <Card>
      < UserContainer />
      </Card>
      <Card>
        <MySuperForm />
      </Card>
      <Card>
        <MySuperFormOptimistic />
      </Card>
    </>
  )
}

export default App
