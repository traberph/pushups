import AppProvider from './provider';
import AppRouter from './router';
import './app.css';

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};


