import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>,
)

function AppWrapper() {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>( 'light' );
  const toggleColorScheme = ( value?: ColorScheme ) =>
    setColorScheme( value || ( colorScheme === 'dark' ? 'light' : 'dark' ) );

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme, primaryColor: "blue" }} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
