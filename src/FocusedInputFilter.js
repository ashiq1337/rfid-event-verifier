import React, { useState, useEffect, useRef } from 'react'
import './FocusedInputFilter.css'

const FocusedInputFilter = ({ data }) => {
  const [inputValue, setInputValue] = useState('')
  const [filteredObject, setFilteredObject] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const foundObject = data.find((obj) => obj.id.toString() === inputValue)
      setFilteredObject(foundObject)
      setInputValue('')
    }
  }

  return (
    <div>
      <input ref={inputRef} value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      {filteredObject && (
        <div className='profile-card'>
          <div className='card-content'>
            <pre>{JSON.stringify(filteredObject, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default FocusedInputFilter
