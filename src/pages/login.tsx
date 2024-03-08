import React, { useState } from 'react';
import { RiMovie2Fill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import { firebaseService } from '../service/firebase';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const { setUserCredential } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  //function to validate email format
  const validateEmail = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  //function to create a new user session
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const api = firebaseService();
    try {
      const credential = await api.signInUser(email, password);
      credential.user.getIdToken().then((idToken: string) => {
        const user = {
          uid: credential.user.uid,
          token: idToken
        };
        setUserCredential(user);
        setEmail('');
        setPassword('');
        navigate('/');
      })
    } catch (error) {
      console.error(error);
      setLoginError("Email or password is incorrect");
    }
  };

  return (
    <>
      <div className='login'>
        <div className='app-title'>
          <RiMovie2Fill />
          <h1>Movie<span>app</span></h1>
        </div>
        <div className='login-form'>
          <div className='form-title'>
            <h2>Sign in</h2>
            <p>To access the best movies.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="email" value={email} onChange={e => {
                validateEmail(e.target.value);
                handleEmailChange(e)
              }} placeholder='Enter your email' required />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='Enter your password' required />
            {loginError && <p className="error-message">{loginError}</p>}
            <button type="submit" className='btn-auth'>Sign In</button>
            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login