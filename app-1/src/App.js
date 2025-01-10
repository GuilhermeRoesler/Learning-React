import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Products from './pages/Products'
import { LayoutProvider } from './context/LayoutContext';

function App() {
  return (
    <LayoutProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/products' element={<ProtectedRoute><Products /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </LayoutProvider>
  );
}

export default App;
