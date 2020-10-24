import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
:root {

  --color-primary: #FF6B6C;
  --color-secondary: #5B5F97;

  --color-black: #263238;
  --color-white: #fff;

  --color-light-gray: #F9F9F9;
  --color-medium-gray: #DFE4EA;
  --color-gray: #999999;

  --color-green: #6FCF97;
  --color-yellow: #F2B279;

  --color-primary-dark: #f26869;
  --color-secondary-dark: #4b4f82;

  font-size: 60%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}

body {
  background: var(--color-ligth-gray);
}

body,
input,
button,
textarea {
  font: 500 1.6rem Roboto;
  color: var(--color-black);
}

h1, h2, h3, h4, h5, h6 {
  font-family: Montserrat;
  font-weight: bold;
}

button {
  cursor: pointer;
}

.container {
  width: 90vw;
  max-width: 700px;
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`
