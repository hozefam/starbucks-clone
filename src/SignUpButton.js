import './SignUpButton.css';

import { Link } from 'react-router-dom';
import React from 'react';

const SignUpButton = () => {
  return (
    <Link className='signUpButton' to='/account/create'>
      Join now
    </Link>
  );
};

export default SignUpButton;
