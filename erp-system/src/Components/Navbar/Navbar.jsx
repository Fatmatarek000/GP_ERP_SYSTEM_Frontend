import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import "./top-nav.css";
export default function Navbar() {
  return (
    <Fragment>
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="search or type" />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="top__nav-right">
          <span className="notification">
            <i class="ri-notification-3-line"></i>
            <span className="badge">2</span>
          </span>
          <div className="profile">
            <Link to="/settings">
              <img src={profileImg} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    
    </Fragment>
  )
}
