import React, { useState } from 'react';
import { RiMovie2Fill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import { firebaseService } from '../service/firebase';
import { useAuth } from '../contexts/AuthContext';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const { setUserCredential } = useAuth();
    const navigate = useNavigate();

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(event.target.value);
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

    //function to create a new user
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const api = firebaseService();
        if (password === passwordConfirm) {
            setPasswordError("");
            api.registerUser(email, password).then((credential) => {
                credential.user.getIdToken().then((idToken: string) => {
                    const user = {
                        uid: credential.user.uid,
                        token: idToken
                    };
                    setUserCredential(user);
                    setEmail('');
                    setPassword('');
                    setPasswordConfirm('');
                    navigate('/');
                })
                alert("Registration successful!");
            }).catch(() => {
                alert("Registration failed, please try again or contact support");
                setEmail('');
                setPassword('');
                setPasswordConfirm('');
            })

        } else {
            setPasswordError("Passwords do not match");
        }
    };

    return (
        <>
            <div className='login'>
                <div className='app-title'>
                    <RiMovie2Fill />
                    <h1>Movie<span>app</span></h1>
                </div>
                <div className='login-form --register'>
                    <div className='form-title'>
                        <h2>Register</h2>
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
                        <div>
                            <input type="password" value={passwordConfirm} onChange={handlePasswordConfirmChange} placeholder='Confirm your password' required />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>
                        <button type="submit" className='btn-auth'>Sign Up</button>
                        <p>Do you have an account? <Link to="/login">Sign In</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register