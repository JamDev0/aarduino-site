import { ThemeProvider } from "styled-components";

import { Router } from "./Router";

import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from "./styles/themes/defaultTheme";

import { GlobalStyles } from "./styles/GlobalTheme";
import { SerialProvider } from "./hooks/useSerial";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SerialProvider>
        <BrowserRouter>
          <Router />

          <GlobalStyles />
        </BrowserRouter>
      </SerialProvider>
    </ThemeProvider>
  )
}
