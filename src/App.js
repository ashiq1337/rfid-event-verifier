import React from 'react'
import FocusedInputFilter from './FocusedInputFilter'

const App = () => {
  const data = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' }
  ]

  return <FocusedInputFilter data={data} />
}

export default App
