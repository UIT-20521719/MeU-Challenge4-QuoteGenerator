import React from 'react';
import { Autorenew } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" reloadDocument>
        <div className="header__btn">
          random
          <Autorenew className="header__btn__icon" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
