import React from 'react'

function Input({name, type, classname, placeholder, manageChange, value }) {
    const inputId = `inputField-${name}`;


  return (
      <div className='input_box'>
          <label htmlFor={inputId}>{placeholder}</label>
          <div className="input">
              <input
                  type={type}
                  onChange={manageChange}
                  className={classname}
                  placeholder={placeholder}
                  value={value}
                  name={name} />
          </div>
    </div>
  )
}

export default Input
