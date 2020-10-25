import React from 'react'

// import { Container } from './styles';

function FilePreview ({ file, remove }) {
  return (
    <img
      key={file.preview}
      src={file.preview}
      width='100'
      onClick={() => remove(file.preview)}
    />
  )
}

export default FilePreview
