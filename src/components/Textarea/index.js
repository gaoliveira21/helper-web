import React from 'react';

import { InputBlock } from './styles';

function Input({ label, name, ...rest}) {
  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...rest} />
    </InputBlock>
  );
}

export default Input;
