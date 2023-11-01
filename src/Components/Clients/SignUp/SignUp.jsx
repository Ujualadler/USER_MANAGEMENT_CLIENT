import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import userAxios from '../../../Axios/userAxios';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const generateError = (err) => toast.error(err, { position: 'bottom-center' });

  const signUpForm = (e) => {
    e.preventDefault();

  
    if (!name.trim() || !email.trim() || !phone.trim() || !password.trim()) {
      generateError('Please fill in all the fields');
      return;
    }

   
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      generateError('Please enter a valid email address');
      return;
    }

   
    if (password.length < 4) {
      generateError('Password should be at least 6 characters long');
      return;
    }

    userAxios
      .post('/signUp', { email, name, phone, password })
      .then((response) => {
        
        if (response.data.status) {
          navigate('/login');
        } else {
          generateError(response.data.error);
        }
      })
      .catch((error) => {
        generateError('An error occurred. Please try again.');
        console.error(error);
      });
  };

  return (
    <div className='main-div-signup'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='login-content'>
        <h1 className='login-text'>SignUp</h1>
        <p>Please Enter Your SignUp Details</p>
        <form className='login-input' onSubmit={signUpForm}>
          <input
            className='input-field'
            type='text'
            name='username'
            placeholder='Username'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='input-field'
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input-field'
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className='input-field'
            type='number'
            name='phone'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input className='login-btn' type='submit' value='SIGNUP' />
          <div className='signup-navi'>
            <p>Already a member..?</p>
            <p>
              <Link className='lo-sign' to='/login'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
