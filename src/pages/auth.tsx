import React from 'react';
import Login from '../components/login';

const Auth:  React.FC = () => {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(`Email: ${email}, Password: ${password}`);
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div className='login'>
        <Login></Login>
    </div>
  );
};

export default Auth;