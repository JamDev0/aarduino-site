import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    :focus {
      outline: none;
    }
  }

  body {
    background-color: ${(params) => params.theme.colors.background};
  }

  body, button, input, p, a {
    font-size: 1rem;
    font-weight: normal;
    color: ${(params) => params.theme.colors.text.text};
    line-height: 160%;
    font-family: 'Roboto', sans-serif;
  }
`