import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import CallbackPage from './pages/Callback';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login2" element={<Login />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
