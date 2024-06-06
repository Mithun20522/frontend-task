import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import userContextProvider from './context/userContextProvider';
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-f0f0nav8no7gm2ke.us.auth0.com"
    clientId="3HWXhL8CPoG6eotHTrZSR66UMcpSk7vS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <userContextProvider>
      <App />
    </userContextProvider>
  </Auth0Provider>
)
