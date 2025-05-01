import { AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "http://localhost:3000/auth-proxy/application/o/authorize", // proxied OIDC URL
  client_id: "RS52eMwMS4xsySHJSVCQ1LCZZR8UAqVcttglr1LI",
  redirect_uri: window.location.origin + "/callback",
  response_type: "code",
  scope: "openid profile email",
};

export default oidcConfig;
    