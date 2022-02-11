import './FindAStore.css';

import { Link } from 'react-router-dom';
import { LocationOn } from '@material-ui/icons';
import React from 'react';

const FindAStore = () => {
  return (
    <Link to='/' className='findAStore'>
      <LocationOn />
      <h5>Find a store</h5>
    </Link>
  );
};

export default FindAStore;
