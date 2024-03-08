import { useEffect } from 'react';
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import { useAuth } from './contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { firebaseService } from './service/firebase';

function App() {

  const { userCredential } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const api = firebaseService();
    api.isLogged().catch(() => {
      if(userCredential === null) {
        navigate("/login")
      }
    })
  }, [userCredential, navigate]);

  return (
    <>
      <Header></Header>
      <div className="container">
        <Home></Home>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
