import React from 'react'
import { createRoot } from 'react-dom/client';

import { Hello } from './Hello';

const root = createRoot(document.getElementById('root'));

const App = () => {

  const name = 'Roger'
  const age = 23

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name='George' age={18} />
    </div>
  )
}

root.render(<App />)