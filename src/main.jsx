import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/addtoCart/context.jsx'
import UserContextProvider from './context/login/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>,
)
