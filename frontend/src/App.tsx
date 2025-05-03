import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
// import CallbackPage from './pages/Callback';
import { Callback } from './pages/Callback';
import Example from './pages/Example';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/example" element={<Example />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="dev" element={<HomePage />} />
      
    </Routes>
  );
}

export default App;
