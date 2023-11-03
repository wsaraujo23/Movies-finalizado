import React from 'react'
import ReactDOM from 'react-dom/client'
import Rota from './routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './style/style'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Rota />
    </BrowserRouter>
  </React.StrictMode>,
)
