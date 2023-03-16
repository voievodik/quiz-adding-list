import React from 'react'

export const InputValue = ({ text,type, name, placeholder, value, onChange, required}) => {
  return (
    <div>
      <label htmlFor="">{text}</label>
      <input 
        type={type}
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
    
  )
}


