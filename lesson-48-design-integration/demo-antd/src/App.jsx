import './App.css'
import { ColorPicker } from 'antd';
import { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChangeColor = (event, value) => {
    console.log(event.toHexString());
  }

  return (
    <>
      App
      <ColorPicker defaultValue="#1677ff" format={'hex'} onChange={handleChangeColor} />
    </>
  )
}

export default App
