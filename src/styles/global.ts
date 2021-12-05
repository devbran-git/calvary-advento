import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
  --primary: #E96C5A;
  --dark: #23100D;
  --gray: #4D4A4A;
  --smoke: #D1D2D4;
  --background: #FAF7F5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
  font-family: 'Montserrat', sans-serif;

  font-size: .8rem;
  font-weight: 400;

  ::-webkit-scrollbar { 
    display: none; 
}
}

h1 {
  font-size: 24px;
  font-weight: 500;
  color: var(--primary);
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`