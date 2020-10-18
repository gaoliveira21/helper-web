import React from 'react'

import { InputBlock } from './styles'

function Input ({ label, name, value, formik, ...rest }) {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...rest} value={value} />

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
