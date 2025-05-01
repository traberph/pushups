import { UserManager, UserManagerSettings, User } from 'oidc-client-ts';

// Replace these with your OpenID Connect provider's configuration
const oidcConfig: UserManagerSettings = {
  authority:
  "https://auth.traberph.de/application/o/authorize", // Your OIDC provider URL
  client_id: "RS52eMwMS4xsySHJSVCQ1LCZZR8UAqVcttglr1LI", // Your client ID
  redirect_uri: `${window.location.origin}/callback`, // Callback URL after authentication
  post_logout_redirect_uri: `${window.location.origin}/`, // URL to redirect to after logout
  response_type: 'code',
  scope: 'openid profile email', // Scopes you need
};

class AuthService {
  private userManager: UserManager;

  constructor() {
    this.userManager = new UserManager(oidcConfig);
  }

  public async getUser(): Promise<User | null> {
    try {
      return await this.userManager.getUser();
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  }

  public async login(): Promise<void> {
    try {
      await this.userManager.signinRedirect();
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  public async logout(): Promise<void> {
    try {
      await this.userManager.signoutRedirect();
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }

  public async handleCallback(): Promise<User | null> {
    try {
      return await this.userManager.signinRedirectCallback();
    } catch (error) {
      console.error('Error handling callback:', error);
      return null;
    }
  }

  public async isAuthenticated(): Promise<boolean> {
    const user = await this.getUser();
    return !!user && !user.expired;
  }
}

export const authService = new AuthService(); 