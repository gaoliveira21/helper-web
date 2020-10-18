import React from 'react'

import { InputBlock } from './styles'

function Input ({ label, name, formik, ...rest }) {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...rest} />
      {formik?.touched[name] && formik?.errors[name] ? (
        <small>{formik?.errors[name]}</small>
      ) : null}
    </InputBlock>
  )
}

export default Input
