import { UserManagerSettings } from "oidc-client-ts";

const oidcConfig: UserManagerSettings = {
  authority: "http://localhost:9000/application/o/starter-app",
  client_id: "D8iHSd6v8we8O41q0GIEvQxYeaVDJHsa5r13cnHZ",
  redirect_uri: `${window.location.origin}`,
  response_type: "code",
  scope: "openid profile email"
}

export default oidcConfig;