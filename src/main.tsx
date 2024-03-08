import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css'
import Login from './pages/login.tsx'
import Register from './pages/register.tsx'
import ContentCategory from './pages/contentCategory.tsx'
import ContentDetails from './pages/contentDetails.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

const Root = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category/:categoryId" element={<ContentCategory />} />
            <Route path="/movie/:movieId" element={<ContentDetails />} />
            <Route path="*" element={<div className='not-found'>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
