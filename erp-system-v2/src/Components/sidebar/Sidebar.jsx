import React from "react";
import "./sidebar.scss";
import { Dashboard } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
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

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
      
        <span className="logo">Erp System</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Dashboard</p>
          <li>
            <LineStyleIcon className="icon"/>
            
            <span>Home</span>
          </li>
          <li>
            <TimelineIcon className="icon"/>
            
            <span>Analysis</span>
          </li>
          <li>
            <TrendingUpIcon className="icon"/>
            
            <span>Sales</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <AttachMoneyIcon className="icon" />
            <span>Transaction</span>
          </li>
          <li>
          <AssessmentIcon className="icon" />
          
            <span>Reports</span>
          </li>
          <li>
          
            <CreditCardIcon className="icon" /> <span>Orders</span>
          </li>
          <li>
           
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          
         
          <p className="title">SERVICE</p>
          <li>
           
            <SettingsSystemDaydreamOutlinedIcon className="icon" />{" "}
            <span>System Health</span>
          </li>
          <li>
           
            <PsychologyOutlinedIcon className="icon" /> <span>Logs</span>
          </li>
          <li>
           
            <SettingsApplicationsIcon className="icon" /> <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
           
            <AccountCircleOutlinedIcon className="icon" /> <span>Profile</span>
          </li>
          <li>
           
            <ExitToAppIcon className="icon" /> <span>Logout</span>
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
