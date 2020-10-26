import React from 'react'

import { ImagePreview } from './styles'

function FilePreview ({ file, remove }) {
  return (
    <ImagePreview>
      <img
        key={file.preview}
        src={file.preview}
        width='100'
      />
      <button onClick={() => remove(file.preview)}>Excluir</button>
    </ImagePreview>
  )
}

export default FilePreview
