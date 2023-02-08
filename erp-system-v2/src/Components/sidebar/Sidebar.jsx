import React from "react";
import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { DarkModeContext } from './../../context/darkModeContext';
import {useContext} from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
      
      <Link to="/" style={{ textDecoration: "none" }}>
      <span className="logo">ERP System</span>
    </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Dashboard</p>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LineStyleIcon className="icon"/>
            <span>Home</span>
            </Link>
          </li>
          <li>
          <Link to="/analysis" style={{ textDecoration: "none" }}>

            <TimelineIcon className="icon"/>
            
            <span>Analysis</span>
            </Link>
          </li>
          <li>
          <Link to="/sales" style={{ textDecoration: "none" }}>

            <TrendingUpIcon className="icon"/>
            
            <span>Sales</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
          <Link to="/users" style={{ textDecoration: "none" }}>

            <PersonOutlineIcon className="icon" />
            <span>Users</span>
            </Link>
          </li>
          <li>
          <Link to="/products" style={{ textDecoration: "none" }}>

            <StoreIcon className="icon" />
            <span>Products</span>
            </Link>
          </li>
          <li>
          <Link to="/transactions" style={{ textDecoration: "none" }}>

            <AttachMoneyIcon className="icon" />
            <span>Transaction</span>
            </Link>
          </li>
          <li>
          <Link to="/report" style={{ textDecoration: "none" }}>

          <AssessmentIcon className="icon" />
          
            <span>Reports</span>
            </Link>
          </li>
          <li>
          <Link to="/orders" style={{ textDecoration: "none" }}>

            <CreditCardIcon className="icon" /> <span>Orders</span>
            </Link>
          </li>
          <li>
          <Link to="/delivery" style={{ textDecoration: "none" }}>

            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
            </Link>
          </li>
          
         
          <p className="title">SERVICE</p>
          <li>
          <Link to="/system-health" style={{ textDecoration: "none" }}>

            <SettingsSystemDaydreamOutlinedIcon className="icon" />{" "}
            <span>System Health</span>
            </Link>
          </li>
          <li>
          <Link to="/logs" style={{ textDecoration: "none" }}>

            <PsychologyOutlinedIcon className="icon" /> <span>Logs</span>
            </Link>
          </li>
          <li>
          <Link to="/setting" style={{ textDecoration: "none" }}>

            <SettingsApplicationsIcon className="icon" /> <span>Settings</span>
            </Link>
          </li>
          <p className="title">USER</p>
          <li>
          <Link to="/profile" style={{ textDecoration: "none" }}>

            <AccountCircleOutlinedIcon className="icon" /> <span>Profile</span>
            </Link>
          </li>
          <li>
          <Link to="/logout" style={{ textDecoration: "none" }}>

            <ExitToAppIcon className="icon" /> <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
      <div className="colorOption"  onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
}

export default Sidebar;
