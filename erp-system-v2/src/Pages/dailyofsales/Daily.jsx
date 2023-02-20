

import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';



import'./daily.css';

const Daily = () => {
  
  return (
    <div className='home'>
    
    <Sidebar/>
    <div className="homeContainer">
    
    <Navbar/>
    
    </div>
    </div>
  )
}

export default Daily