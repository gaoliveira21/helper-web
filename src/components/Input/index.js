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
      <div>
        <small>{formik?.touched[name] && formik?.errors[name]
          ? formik?.errors[name]
          : null}
        </small>
      </div>
    </InputBlock>
  )
}

export default Input
