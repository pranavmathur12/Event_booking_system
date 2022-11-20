import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://1000logos.net/wp-content/uploads/2021/09/HCL-Logo.png"
          alt=""
        />
      </Link>

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <Link to="/signup">
          <p>Register</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Header
