import { BrowserRouter, Route, Routes } from 'react-router'
import OnePageExample from './routes/onePageExample'
import { ProtectedRoute } from '../components/ProtectedRoute'

import { Login } from './routes/login'
import HomePage from './routes/homePage'
import { Callback } from './routes/callback'
import { PushupPage } from '../features/pushup/pushupPage'



const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/example" element={<OnePageExample />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      {/* for development purposes we enable the route to the home page without authentication */}
      <Route path="dev" element={<PushupPage />} />
    </Routes>
  </BrowserRouter>  )
}

export default AppRouter