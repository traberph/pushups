import { AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
    authority:
    "https://auth.traberph.de/application/o/authorize", // Your OIDC provider URL
    client_id: "RS52eMwMS4xsySHJSVCQ1LCZZR8UAqVcttglr1LI", // Your client ID
    redirect_uri: `http://localhost:3000/callback2`, // Callback URL after authentication
    post_logout_redirect_uri: `http://localhost:3000/`, // URL to redirect to after logout
    response_type: 'code',
    scope: 'openid profile email', // Scopes you need
    metadata: {
      authorization_endpoint: "https://auth.traberph.de/application/o/authorize/",
      token_endpoint: "https://auth.traberph.de/application/o/token/",
      userinfo_endpoint: "https://auth.traberph.de/application/o/userinfo/",
      end_session_endpoint: "https://auth.traberph.de/application/o/pushups/end-session/",
      issuer: "https://auth.traberph.de/application/o/pushups/",
    },
};

export default oidcConfig;
    