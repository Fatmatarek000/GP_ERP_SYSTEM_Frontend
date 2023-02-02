

import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widget from '../../Components/widget/Widget';
import "./home.scss";
import Feature from './../../Components/feature/Feature';
import Charts from './../../Components/Chart/Charts';
const Home = () => {
  return (
    <div className='home'>
    
    <Sidebar/>
    <div className="homeContainer">
    
    <Navbar/>
    <div className='widgets'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
    
    </div>
    
    <div className="charts">
    <Feature/>
    <Charts/>
    </div>
    </div>
    </div>
  )
}

export default Home