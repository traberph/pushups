import { AuthProvider } from 'react-oidc-context';
import oidcConfig from '../services/authConfig';

interface ProviderProps {
    children: React.ReactNode
}

const AppProvider = ({ children }: ProviderProps) => {
  return (
    <AuthProvider {...oidcConfig}>
        {children}
    </AuthProvider>
  )
}

export default AppProvider