import './SignInButton.css';

import { Link } from 'react-router-dom';
import React from 'react';

const SignInButton = () => {
  return (
    <Link className='signInButton' to='/account/signin'>
      Sign in
    </Link>
  );
};

export default SignInButton;
