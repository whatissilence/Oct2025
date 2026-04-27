import './App.css'
import MovieSelector from './components/MovieSelector.jsx';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { deepOrange } from '@mui/material/colors';

function App() {

  return (
    <>
      App
      <MovieSelector />
      <AccessAlarmsIcon sx={{ fontSize: 60, color: deepOrange[900] }} />
    </>
  )
}

export default App
