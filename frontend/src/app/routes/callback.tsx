import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { authService } from '../../services/authService';

export const Callback: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await authService.handleCallback();
        console.log('Authenticated', authService.isAuthenticated());

        navigate('/dev'); // Redirect to home page after successful authentication
      } catch (err) {
        setError('Authentication failed. Please try again.');
        console.error('Authentication error:', err);
      }
    };

    handleCallback();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>  
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-gray-600">Processing authentication...</div>
    </div>
  );
};

