import './MenuLink.css';

import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuLink = ({ link, path, icon, goBackIcon, onClick, width }) => {
  return (
    <>
      <Link to={path ? path : '/'}>
        <motion.li
          style={{ width }}
          onClick={onClick}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {goBackIcon && <ChevronLeftRounded fontSize='large' />} {link}
          {icon && <ChevronRightRounded fontSize='large' />}
        </motion.li>
      </Link>
    </>
  );
};

export default MenuLink;
