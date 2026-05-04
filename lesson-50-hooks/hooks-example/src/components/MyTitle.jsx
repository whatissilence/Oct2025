import { memo } from 'react';

export default memo(function MyTitle({ isRedColor, insideClick }) {

  console.log('MyTitle rendered. isRedColor = ', isRedColor);

  const style = {
    color: isRedColor ? 'red' : 'green'
  }

  return (
    <>
      <h1 style={style}>Welcome to My Site</h1>
      <button onClick={insideClick} >Inside Title Button</button>
    </>
  )
})