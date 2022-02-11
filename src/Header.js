import './Header.css';

import { Example } from './Example';
import FindAStore from './FindAStore';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton';
import React from 'react';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

const Header = ({ menuPage }) => {
  const user = useSelector(selectUser);

  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className='header__left'>
        <Link to='/' className='header__logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt=''
          />
        </Link>
        <Link to='/menu' className='header__link'>
          Menu
        </Link>
        <Link to='/' className='header__link'>
          Rewards
        </Link>
        <Link to='/' className='header__link'>
          Gift Cards
        </Link>
      </div>
      <div className='header__right'>
        <Example />

        {!user ? (
          <>
            <FindAStore />
            <SignInButton />
            <SignUpButton />
          </>
        ) : (
          <div className='header__logout'>
            {menuPage ? <LogOutButton /> : <Link to='/menu'>Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
