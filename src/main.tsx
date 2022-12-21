import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TronProvider } from './hooks'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TronProvider>
      <App />
    </TronProvider>
  </React.StrictMode>,
)
