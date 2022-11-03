import { ThemeProvider } from "styled-components";

import { Router } from "./Router";

import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from "./styles/themes/defaultTheme";

import { GlobalStyles } from "./styles/GlobalTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
