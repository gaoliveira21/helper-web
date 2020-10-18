import React from 'react'

import { InputBlock } from './styles'

function Input ({ width, label, name, type, placeholder, formik, ...rest }) {
  return (
    <InputBlock width={width}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      {formik?.touched[name] && formik?.errors[name] ? (
        <small>{formik?.errors[name]}</small>
      ) : null}
    </InputBlock>
  )
}

export default Input
