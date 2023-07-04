import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "../../assets/gmail.png";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/Modal/modalSlice";

const Header = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__icon" />
        <div className="header__left-icon">
          <img src={logo} alt="gmail-icon" />
          <h2>Gmail</h2>
        </div>
      </div>
      <div className="header__input">
        <SearchIcon className="header__icon" />
        <input type="text" placeholder="Search mail" />
        <TuneIcon className="header__icon" />
      </div>
      <div className="header__right">
        <HelpOutlineOutlinedIcon className="header__icon" />
        <SettingsIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <Avatar
          onClick={() => dispatch(openModal())}
          style={{ cursor: "pointer" }}
          className="header__right-avatar"
          src={user?.photourl}
        />
      </div>
    </div>
  );
};

export default Header;
