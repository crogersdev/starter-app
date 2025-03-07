import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context'

const oidcConfig = {
  authority: "http://localhost:9000/application/o/starter-app",
  client_id: "D8iHSd6v8we8O41q0GIEvQxYeaVDJHsa5r13cnHZ",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "openid profile email offline_access"
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
