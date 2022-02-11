import './Info.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Info = ({
  title,
  info,
  link,
  path,
  image,
  background,
  color,
  className
}) => {
  return (
    <div className='info' style={{ color, background }}>
      <img src={image} className='info__image' alt='' />
      <div className='info__text'>
        <h4>{title}</h4>
        <h6>{info}</h6>
        <Link to={path} style={{ color }} className={className}>
          {link}
        </Link>
      </div>
    </div>
  );
};

export default Info;
