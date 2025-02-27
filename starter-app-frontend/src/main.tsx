import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "react-oidc-context";
import './index.css'
import App from './App.tsx'

const oidcConfig = {
  authority: "email",
  client_id: "D8iHSd6v8we8O41q0GIEvQxYeaVDJHsa5r13cnHZ",
  redirect_uri: "http://localhost:5173/",
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: "http://localhost:5173/"
  // Use WebStorageStateStore for storing tokens in localStorage (default)
  // or SessionStorageStateStore for sessionStorage
  // store: new WebStorageStateStore({ store: window.localStorage }), 
  // automaticSilentRenew: true, // Optional, but recommended for smooth token refresh
  // silent_redirect_uri: 'YOUR_APP_URL/silent-renew.html', // Optional, required if automaticSilentRenew is true
  };
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
